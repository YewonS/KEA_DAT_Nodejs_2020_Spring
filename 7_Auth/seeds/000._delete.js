
exports.seed = function(knex) {
  return knex('electives').del() // delete all the data in the table
    .then(function () {
      return knex('users').del()
    });
};
