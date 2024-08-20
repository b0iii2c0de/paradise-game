// удалить, относиться к tailscale

import { createServer } from 'https'
import { readFileSync } from 'fs'
import { createServer as createViteServer } from 'vite'

const httpsOptions = {
  key: readFileSync('/home/b0iii2c0de/4c0de.anaconda-paradise.ts.net.key'),
  cert: readFileSync('/home/b0iii2c0de/4c0de.anaconda-paradise.ts.net.crt')
}

async function startServer() {
  const app = await createViteServer({
    server: { https: httpsOptions },
    root: './dist',  // Укажите путь к папке с собранными файлами
    base: '/'
  })

  const server = createServer(httpsOptions, app.middlewares)

  // Измените порт с 443 на 8443, 
  // так как 443 может требовать прав суперпользователя
  server.listen(8443, () => {
    console.log('HTTPS сервер запущен на порту 8443')
  })
}

startServer()
