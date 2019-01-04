const knex = {}

knex.prod = require('knex')({
  client: 'mysql',
  connection: {
    host: 'your-server',
    user: 'root',
    password: '',
    database: 'db-name',
  }
})

knex.dev = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db-name',
  }
})

module.exports = knex.dev