
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clockData', table=>{
    table.increments()
    table.timestamp('Clock_in').defaultTo(knex.fn.now());
    table.dateTime('Clock_out').defaultTo(null)
    table.integer('Employee_id').notNullable()
    table.foreign('Employee_id').references('users.Employee_id')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clockData')
};
