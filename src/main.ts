import { createApp } from 'vue';
import App from './App.vue';
import '@purge-icons/generated';
import { createI18n } from 'vue-i18n';

import ItNotification from '/@equal/components/notification';
import ItProgressbar from '/@equal/components/progressbar';
import ItTooltip from '/@equal/components/tooltip';
import Loadingbar from '/@equal/components/loadingbar';

import './styles/base.less';

// Router
import { Router } from '/@/router';

// i18n
import messages from '@intlify/vite-plugin-vue-i18n/messages';

// WindiCSS
import 'virtual:windi.css';
import 'virtual:windi-devtools';

const app = createApp(App);

//
const i18n = createI18n({
  locale: 'en',
  messages,
});

// app.config.globalProperties.$Message = Message
app.config.globalProperties.$Notification = ItNotification
app.config.globalProperties.$Loading = Loadingbar

app.use(i18n);

app.use(Router);

ItProgressbar.install(app);
ItTooltip.install(app);

app.mount('#app');
