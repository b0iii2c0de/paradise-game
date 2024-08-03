import './assets/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initApp } from './api/init'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const isDevelopment = import.meta.env.DEV

async function startApp() {
  // Ждем небольшую задержку для уверенности, что Telegram WebApp полностью инициализирован
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const initResult = await initApp();
  if (initResult) {
    app.mount('#app')
  } else if (isDevelopment) {
    console.warn('Failed to initialize app - running in development mode!');
    app.mount('#app')
  } else {
    console.error('Failed to initialize in TG environment!');
  }
}

window.addEventListener('load', startApp);

// верни отдельно если что-то пойдёт не так
// app.mount('#app')
