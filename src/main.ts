import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Styles
import '@/assets/styles/main.scss';

// Vuetify
import vuetify from '@/plugins/vuetify.js';

const app = createApp(App);

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount('#app');
