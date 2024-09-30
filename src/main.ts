import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import './index.css';

import App from './App.vue';
import { createApp } from 'vue';
import { loadFonts } from './plugins/webfontloader';
import router from './router'
import store from './store';
import vuetify from './plugins/vuetify';

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app')
