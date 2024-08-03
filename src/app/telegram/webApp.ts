import WebApp from '@twa-dev/sdk'
import { mockWebApp } from './webAppMock'

/**
 * Объект WebApp Telegram.
 *
 * Этот объект представляет собой экземпляр WebApp Telegram, который используется для взаимодействия
 * с Telegram Mini App API. Если WebApp Telegram недоступен (например, при разработке или тестировании
 * вне среды Telegram), вместо него используется мок-объект mockWebApp.
 *
 * @type {typeof WebApp}
 */
const tgWebApp: typeof WebApp = (window as any).Telegram?.WebApp || mockWebApp

console.log('Telegram WebApp object:', tgWebApp)

tgWebApp.ready()
// tgWebApp.showAlert('The app is initialized in TG environment!')

export { tgWebApp }

