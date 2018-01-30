
exports.up = function(knex, Promise) {
  return knex.schema.createTable('labor_hours', table=>{
    table.increments()
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id')
    table.integer('project_id').notNullable()
    table.foreign('project_id').references('projects.id')
    table.string('hours_worked').defaultTo(null)
    table.integer('Parts_made').defaultTo(0)
    table.integer('Non_Conforming_Parts').defaultTo(0)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('labor_hours')
};
