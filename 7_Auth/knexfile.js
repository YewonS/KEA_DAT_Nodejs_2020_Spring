const credentials = require("./config/mysqlCredentials.js")
const { knexSnakeCaseMappers } = require('objection')

module.exports = {

  development: {
    client: 'mysql', // driver, not database
    connection: {
        database: credentials.database,
        user:     credentials.user,
        password: credentials.password
    },
    ...knexSnakeCaseMappers() // on the same top level as development
  }

};
