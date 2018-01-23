
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clockData', table=>{
    table.increments()
    table.timestamp('Clock_in').defaultTo(knex.fn.now());
    table.dateTime('Clock_out').defaultTo(null)
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clockData')
};
