
exports.seed = function(knex) {
  return knex('users').del() // delete all the data in the table
  .then(() => {
    return knex('roles').del();
  });
};
