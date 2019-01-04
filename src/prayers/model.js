const knex = require('../config/db.js')

module.exports = {
  
  findOne: async (id, filter) => {

    return knex.select().table('circles')
           // .where('id', id)
           .where(filter)
           .limit(1)

  } 

}