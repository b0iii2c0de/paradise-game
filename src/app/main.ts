import './assets/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './telegram/webApp'
import './mocks/tgWebAppMock'
import { initApp } from './api/init'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// const isDevelopment = import.meta.env.DEV

// async function startApp() {
//   if (window.Telegram && window.Telegram.WebApp) {
//     window.Telegram.WebApp.ready();
//     await new Promise(resolve => setTimeout(resolve, 100));
//     const initResult = await initApp();
//     if (initResult) {
//       app.mount('#app')
//     } else if (isDevelopment) {
//       console.warn('Failed to initialize app, but running in development mode. Mounting app anyway.');
//       app.mount('#app')
//     } else {
//       console.error('Failed to initialize app');
//     }
//   } else {
//     console.warn('Telegram Web App is not available. Running in development mode.');
//     app.mount('#app')
//   }
// }

// window.addEventListener('load', startApp);

// верни отдельно если что-то пойдёт не так
app.mount('#app')
