import { createRouter as _createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue'),
  },
];

export function createRouter() {
  return _createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
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
