const { Model } = require('objection')

class Role extends Model {
    static tableName = 'roles'
    
    static relationMappings = {
        owner: {
            relation: Model.HasManyRelation,
            modelClass: User,
            join: {
                from: 'roles.id',
                to: 'users.roleId'
            }
        }
    }
}

module.exports = Role