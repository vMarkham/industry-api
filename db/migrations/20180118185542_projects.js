
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table=>{
    table.increments()
    table.string('customer').notNullable()
    table.date('due_date').notNullable()
    table.integer('Part_count').notNullable().defaultTo(10)
    table.integer('Part_No').notNullable()
    table.integer('Parts_made').notNullable().defaultTo(0)
    table.integer('labor_hours').notNullable().defaultTo(0)
    table.integer('scrap_parts').defaultTo(0)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
