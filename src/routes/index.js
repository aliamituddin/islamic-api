const router = require('koa-router')()
const UsersController = require('../users/controller')
const PrayersController = require('../prayers/controller')
const PrayersModel = require('../prayers/model')
// const knex = require('../../app/config/db.js')

// Users
router.get('/users', UsersController.index)

// Prayers
router.get('/products', PrayersController.list)
router.get('/products/:id', PrayersController.findOne)

// Root
const RootController = (ctx) => {
  const { response: res } = ctx
  
  return res.body = { message: 'f-api v1' }
}

router.get('/', RootController)

// Try
router.get('/try', async (ctx) => {
  // ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
  // ctx.body = ctx.url
  // ctx.body = ctx.params
  ctx.body = ctx.query
  // ctx.body = await Prayers.find()
  // ctx.body = await knex.select().table('circles').limit(1)
  // ctx.body = await knex.raw('select * from circles limit 1').rows
})

module.exports = router