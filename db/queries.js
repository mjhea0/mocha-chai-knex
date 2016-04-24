var knex = require('./knex.js');

function Shows() {
  return knex('shows');
}

// *** queries *** //

function getAll() {
  return Shows().select();
}

function getSingle(showID) {
  return Shows().where('id', parseInt(showID)).first();
}

function add(show) {
  return Shows().insert(show, 'id');
}

function update(showID, updates) {
  return Shows().where('id', parseInt(showID)).update(updates);
}

function deleteItem(showID) {
  return Shows().where('id', parseInt(showID)).del();
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};