import { createSSRApp } from 'vue';
import App from './App.vue';
import '@purge-icons/generated';

import ItNotification from 'library/components/notification';
import ItProgressbar from 'library/components/progressbar';
import ItTooltip from 'library/components/tooltip';
import { createHead } from '@vueuse/head';

import Loadingbar from 'library/components/loadingbar';

// Router
import { createRouter } from './router';

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/base.less';
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
// import 'virtual:windi-devtools'

export function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  const head = createHead();

  // app.config.globalProperties.$Message = Message
  app.config.globalProperties.$Notification = ItNotification;

  ItProgressbar.install(app);

  // Loadingbar.loadingInstance = app;

  // app.config.globalProperties.$Loading = Loadingbar;

  ItTooltip.install(app);

  app.use(router);

  // install all modules under `modules/`
  Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(app))

  router.isReady().then(async () => {
    const { registerSW } = await import('virtual:pwa-register')
    registerSW({ immediate: true })
  })

  app.use(head);

  return { app, router, head }
}
