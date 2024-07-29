import './assets/index.css'
import { initApp } from './api/init';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
initApp();

app.mount('#app')
