const express = require('express')
const app = express()

app.use('/', express.static('dist'))
app.listen(8090, () => {
  console.log('running 8090')
})
