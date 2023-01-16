const dbServer = (port) => {
  const path = require('path')

  const jsonServer = require('json-server')
  const server = jsonServer.create()
  const router = jsonServer.router(path.join(__dirname, './db.json'))
  const middlewares = jsonServer.defaults()

  server.use(middlewares)
  server.use(router)

  // const port = 510
  return server.listen(port, (_) => {
    console.log('JSON Server is running on ', port)
  })
}
dbServer(21005)
