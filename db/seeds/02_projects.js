exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del().then(function() {
    // Inserts seed entries
    return knex('projects').insert([
      {
        id: 1,
        customer: 'ACME',
        due_date: '1/11/2019',
        Part_count: 28
      }, {
        id: 2,
        customer: 'ACME',
        due_date: '3/21/2018',
        Part_count: 50
      }, {
        id: 3,
        customer: 'ABC Company',
        due_date: '11/17/2018',
        Part_count: 100
      }, {
        id: 4,
        customer: 'Mfg Corp',
        due_date: '03/06/18',
        Part_count: 16
      }
    ]);
  }).then(() => {
    return knex.raw(`SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects));`);
  })
};
