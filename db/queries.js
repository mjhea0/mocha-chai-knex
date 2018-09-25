var knex = require('./knex.js');

function Order() {
  return knex('salesforce.order');
}

// *** queries *** //

function getAll() {
  return Order().select();
}

function getSingle(orderId) {
  return Order().where('id', parseInt(orderId)).first();
}

function add(order) {
  return Order().insert(order, 'id');
}

function update(orderId, updates) {
  return Order().where('id', parseInt(orderId)).update(updates);
}

function deleteItem(orderId) {
  return Order().where('id', parseInt(orderId)).del();
}


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};