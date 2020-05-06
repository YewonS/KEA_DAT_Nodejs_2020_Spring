const { Model } = require('objection')

class User extends Model {
    static get tableName() {
        return 'users'
    }
}


// make this available outside this file. file-level exports
module.exports = User