exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del().then(function() {
    // Inserts seed entries
    return knex('projects').insert([
      {
        id: 1,
        customer: 'ACME',
        due_date: '1/11/2019',
        Part_count: 28,
        Part_No:567
      }, {
        id: 2,
        customer: 'ACME',
        due_date: '3/21/2018',
        Part_count: 50,
        Part_No:569
      }, {
        id: 3,
        customer: 'ABC Company',
        due_date: '11/17/2018',
        Part_count: 100,
        Part_No:2365
      }, {
        id: 4,
        customer: 'Mfg Corp',
        due_date: '03/06/18',
        Part_count: 16,
        Part_No:789
      },{
        id: 5,
        customer: 'Big Box',
        due_date: '03/06/19',
        Part_count: 16,
        Part_No:902
      },{
        id: 6,
        customer: 'Big Box',
        due_date: '04/18/18',
        Part_count: 16,
        Part_No:153
      },{
        id: 7,
        customer: 'Nos',
        due_date: '03/06/18',
        Part_count: 16,
        Part_No:983
      },{
        id: 8,
        customer: 'Big Box',
        due_date: '03/06/18',
        Part_count: 16,
        Part_No:653
      },{
        id: 9,
        customer: 'Nos',
        due_date: '2/06/19',
        Part_count: 16,
        Part_No:348
      },{
        id: 10,
        customer: 'kwik-i-mart',
        due_date: '03/06/18',
        Part_count: 16,
        Part_No:572
      },{
        id: 11,
        customer: 'kwik-i-mart',
        due_date: '03/29/20',
        Part_count: 16,
        Part_No:711
      },{
        id: 12,
        customer: 'Big Box',
        due_date: '11/12/19',
        Part_count: 16,
        Part_No:110
      },{
        id: 13,
        customer: 'kwik-i-mart',
        due_date: '01/01/19',
        Part_count: 16,
        Part_No:220
      },{
        id: 14,
        customer: 'kwik-i-mart',
        due_date: '12/18/19',
        Part_count: 16,
        Part_No:490
      },{
        id: 15,
        customer: 'Nos',
        due_date: '08/21/20',
        Part_count: 16,
        Part_No:960
      },{
        id: 16,
        customer: 'Batman',
        due_date: '06/30/18',
        Part_count: 16,
        Part_No:222
      },{
        id: 17,
        customer: 'Batman',
        due_date: '03/06/23',
        Part_count: 16,
        Part_No:789
      },{
        id: 18,
        customer: 'Adam',
        due_date: '02/06/21',
        Part_count: 16,
        Part_No:727
      },{
        id: 19,
        customer: 'Adam',
        due_date: '03/06/18',
        Part_count: 16,
        Part_No:777
      },{
        id: 20,
        customer: 'Monsters Inc',
        due_date: '09/18/22',
        Part_count: 16,
        Part_No:737
      }
    ]);
  }).then(() => {
    return knex.raw(`SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects));`);
  })
};
