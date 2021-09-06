import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import ViteComponents from 'vite-plugin-components';
import PurgeIcons from 'vite-plugin-purge-icons';
import ViteFonts from 'vite-plugin-fonts';
import svgLoader from 'vite-svg-loader';
const vueJsx = require('@vitejs/plugin-vue-jsx');
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { VitePWA } from 'vite-plugin-pwa'

// import viteSSR from 'vite-ssr/plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      'locales': resolve(__dirname, './locales'),
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vueJsx(),

    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      pagesDir: "src/pages"
      // pagesDir: [
      //   // issue #68
      //   { dir: resolve(__dirname, './src/pages'), baseRoute: 'home' },
      //   { dir: 'src/features/**/pages', baseRoute: 'features' },
      //   { dir: 'src/admin/pages', baseRoute: 'admin' },
      // ],
      // extensions: ['vue', 'md'],
      // syncIndex: true,
      // replaceSquareBrackets: true,
      // extendRoute(route) {
      //   if (route.name === 'about')
      //     route.props = route => ({ query: route.query.q })

      //   if (route.name === 'components') {
      //     return {
      //       ...route,
      //       beforeEnter: (route) => {
      //         // eslint-disable-next-line no-console
      //         console.log(route)
      //       },
      //     }
      //   }
      // },
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader(),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      extensions: ['vue'],
    }),

    // vhttps://github.com/stafyniaksacha/vite-plugin-fonts#readme
    ViteFonts({
      google: {
        families: ['Open Sans', 'Montserrat', 'Fira Sans'],
      },
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: 'prose prose-sm m-auto text-left',
    }),

    // https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
    PurgeIcons({
      /* PurgeIcons Options */
    }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__dirname, './locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  build: {
    minify: true
  }
});

