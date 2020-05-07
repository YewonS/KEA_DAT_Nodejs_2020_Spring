
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('roles').select().then(roles => {
    return knex('users').insert([
      { username: 'admin', password: "$2a$12$OEIO5NHVsiWSxw98RZQJjedHXANi9A9wUUdVx1XKWeW8V.XBLg9kS", role_id: roles.find(role => role.role === 'ADMIN').id },
    ]);
  });
  
};
