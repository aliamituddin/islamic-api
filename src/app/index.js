// Import Core App
const Koa = require('koa')
const app = new Koa()
const router = require('../routes')

// Import Middlewares
const body = require('koa-body')
const cors = require('@koa/cors')
const { PORT } = require('../config')

// Use Middlewares
app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())
app.use(body())

const fnStart = () => {
  console.log(`App running on port: ${PORT}`)
  console.log(`Server time: ${new Date().toLocaleString()}`)
}

app.listen(PORT, fnStart)