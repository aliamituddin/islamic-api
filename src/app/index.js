const Koa = require('koa')
const app = new Koa()
const router = require('../routes')

const body = require('koa-body')
const cors = require('@koa/cors')
const { PORT } = require('../config')

app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())
app.use(body())

app.listen(PORT, () => console.log(`app running on port: ${PORT}`))