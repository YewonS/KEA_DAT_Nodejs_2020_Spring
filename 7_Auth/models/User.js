const { Model } = require('objection')

const Role = require('./Role.js')

class User extends Model {
    static tableName = 'users'

    static relationMappings = {
        role: {
            relation: Model.BelongsToOneRelation,
            modelClass: Role,
            join: {
                from: 'users.roldId',
                to: 'roles.id'
            }
        }
    }
}


// make this available outside this file. file-level exports
module.exports = User