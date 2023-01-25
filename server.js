const express = require('express')
const app = express()

const baseDir = `${__dirname}/dist/`
app.use(express.static(`${baseDir}`))
app.get('*', (req, res) => res.sendfile('index.html', { root: baseDir }))
app.get('/teste', (req, res) => {
  res.send('Hello World!')
})

const port = 3000
app.listen(port, () => {
  console.log('running ' + port)
})
