
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table=>{
    table.increments()
    table.string('name').notNullable()
    table.integer('Employee_id').notNullable()
    table.boolean('isAdmin').notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
