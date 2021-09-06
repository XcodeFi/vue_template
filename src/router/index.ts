import { createRouter as _createRouter, createWebHistory, createMemoryHistory } from 'vue-router';
// import generatedRoutes from 'virtual:generated-pages'
// import { setupLayouts } from 'virtual:generated-layouts';
// const routes = setupLayouts(generatedRoutes)

const routes = [
  {
    path: '/',
    component: () => import('~/pages/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('~/pages/About.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('~/pages/404.vue'),
    meta: {
      title: 'Page not found'
    }
  }
];

export function createRouter() {
  const router = _createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  });

  router.beforeEach((to, from) => {
    // interact.progressBar.start()
    return true
  })
  router.afterEach((to, from) => {
    // interact.progressBar.end()
    // SXO.setSEO({
    //   title: to.meta.title || 'vue3-SSR-starter',
    //   description: to.meta.description || 'Prefetch and sync state to client with one line of code, out-of-the-box',
    //   keywords: to.meta.keywords || 'ssr,tailwindcss,vue3,vite,composition-api'
    // })
    // SXO.setSMO({
    //   title: to.meta.title || 'vue3-SSR-starter',
    //   description: to.meta.description || 'Prefetch and sync state to client with one line of code, out-of-the-box',
    //   image: '/assets/logo.png',
    //   url: `${session.host.value}${to.fullPath}`
    // })
    return true
  })

  return router
}



// import {
//   createMemoryHistory,
//   createRouter as _createRouter,
//   createWebHistory
// } from 'vue-router'

// // Auto generates routes from vue files under ./pages
// // https://vitejs.dev/guide/features.html#glob-import
// const pages = import.meta.glob('./pages/*.vue')

// const routes = Object.keys(pages).map((path: any) => {
//   const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
//   console.log(name)
//   return {
//     path: name === '/Home' ? '/' : name,
//     component: pages[path] // () => import('./pages/*.vue')
//   }
// })

// export function createRouter() {
//   return _createRouter({
//     // use appropriate history implementation for server/client
//     // import.meta.env.SSR is injected by Vite.
//     history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
//     routes
//   })
// }
