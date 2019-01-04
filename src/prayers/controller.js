const { $http, API_URL } = require('../config')
const ProductsModel = require('./model')

module.exports = {

  list: async (ctx) => {
    const url = `${API_URL}/circles/${ctx.url.indexOf('?')!==-1?'?'+ctx.url.split('?').pop():'/'+ctx.url.split('/').shift()}`
    const { data } = await $http(url)
    ctx.body = data
  },

  findOne: async (ctx) => {
    const data = await ProductsModel.findOne(ctx.params.id, ctx.query)
    ctx.body = {
      status: data.length ? 200:404,
      results: data
    }
  },

}