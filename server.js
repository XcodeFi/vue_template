// @ts-check
const fs = require('fs')
const path = require('path')
// @ts-ignore
const express = require('express')

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD

const { proxy, port } = require('./config/ssr.config');

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production'
) {
  const resolve = (p) => path.resolve(__dirname, p)

  const indexProd = isProd
    ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
    : ''

  const manifest = isProd
    ? // @ts-ignore
      require('./dist/client/ssr-manifest.json')
    : {}

  const app = express()

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite
  if (!isProd) {
    vite = await require('vite').createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: 'ssr',
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100
        }
      }
    })
    // use vite's connect instance as middleware
    // @ts-ignore
    app.use(vite.middlewares)
  } else {
    // @ts-ignore
    app.use(require('compression')())
    // @ts-ignore
    app.use(
      // @ts-ignore
      require('serve-static')(resolve('dist/client'), {
        index: false
      })
    )
  }

  // @ts-ignore
  app.use('*', async (req, res) => {
    const context = {
      // for nginx, set config:
      // proxy_set_header X-Forwarded-Proto $scheme
      // proxy_set_header Host $host

      // host: `${req.headers['x-forwarded-proto']}://${req.headers.host}`,
      host: `${req.protocol}://${req.headers.host}`,
      ua: req.headers['user-agent']
    }

    try {
      const url = req.originalUrl

      let template, render;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.ts')).render;
      } else {
        template = indexProd
        // @ts-ignore
        render = require('./dist/server/entry-server.js').render
      }

      const [err, appHtml, preloadLinks, headTags, htmlAttrs, bodyAttrs] = await render(url, manifest, context)

      const html = template
      .replace('data-html-attrs', htmlAttrs)
      .replace('<!--head-tags-->', headTags)
      .replace('data-body-attrs', bodyAttrs)
      .replace('<!--preload-links-->', preloadLinks)
      .replace('<!--ssr-outlet-->', appHtml)

      let statusCode = 200;

      if (err) {
        console.log(err)
        statusCode = err.message.indexOf('404') === 0 ? 404 : 202; // Rendering error with 202 is not cached
      }

      res.status(statusCode).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite && vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app, vite }
}

if (!isTest) {
  createServer().then(({ app }) =>
    // @ts-ignore
    app.listen(port, () => {
      console.log(`http://localhost:${port}`)
    })
  )
}

// for test use
exports.createServer = createServer
