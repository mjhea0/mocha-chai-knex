exports.up = function(knex, Promise) {
  return true;
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shows');
};