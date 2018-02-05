exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clock_data').del().then(function() {
    // Inserts seed entries
    return knex('clock_data').insert([
      {
        Clock_in: new Date(2018, 01, 01, 8),
        Clock_out: new Date(2018, 01, 01, 16, 30),
        Employee_id: 1001
      }, {
        Clock_in: new Date(2018, 01, 01, 8),
        Clock_out: new Date(2018, 01, 01, 16, 30),
        Employee_id: 1002
      }, {
        Clock_in: new Date(2018, 01, 01, 8),
        Clock_out: new Date(2018, 01, 01, 16, 30),
        Employee_id: 1003
      }, {
        Clock_in: new Date(2018, 01, 01, 8),
        Clock_out: new Date(2018, 01, 01, 16, 30),
        Employee_id: 1004
      }, {
        Clock_in: new Date(2018, 01, 01, 8),
        Clock_out: new Date(2018, 01, 01, 16, 30),
        Employee_id: 1005
      }, {
        Clock_in: new Date(2018, 01, 02, 8),
        Clock_out: new Date(2018, 01, 02, 16, 30),
        Employee_id: 1001
      }, {
        Clock_in: new Date(2018, 01, 02, 8),
        Clock_out: new Date(2018, 01, 02, 16, 30),
        Employee_id: 1002
      }, {
        Clock_in: new Date(2018, 01, 02, 8),
        Clock_out: new Date(2018, 01, 02, 16, 30),
        Employee_id: 1003
      }, {
        Clock_in: new Date(2018, 01, 02, 8),
        Clock_out: new Date(2018, 01, 02, 16, 30),
        Employee_id: 1004
      }, {
        Clock_in: new Date(2018, 01, 02, 8),
        Clock_out: new Date(2018, 01, 02, 16, 30),
        Employee_id: 1005
      }, {
        Clock_in: new Date(2018, 01, 03, 8),
        Clock_out: new Date(2018, 01, 03, 16, 30),
        Employee_id: 1001
      }, {
        Clock_in: new Date(2018, 01, 03, 8),
        Clock_out: new Date(2018, 01, 03, 16, 30),
        Employee_id: 1002
      }, {
        Clock_in: new Date(2018, 01, 03, 8),
        Clock_out: new Date(2018, 01, 03, 16, 30),
        Employee_id: 1003
      }, {
        Clock_in: new Date(2018, 01, 03, 8),
        Clock_out: new Date(2018, 01, 03, 16, 30),
        Employee_id: 1004
      }, {
        Clock_in: new Date(2018, 01, 03, 8),
        Clock_out: new Date(2018, 01, 03, 16, 30),
        Employee_id: 1005
      }, {
        Clock_in: new Date(2018, 01, 04, 8),
        Clock_out: new Date(2018, 01, 04, 16, 30),
        Employee_id: 1001
      }, {
        Clock_in: new Date(2018, 01, 04, 8),
        Clock_out: new Date(2018, 01, 04, 16, 30),
        Employee_id: 1002
      }, {
        Clock_in: new Date(2018, 01, 04, 8),
        Clock_out: new Date(2018, 01, 04, 16, 30),
        Employee_id: 1003
      }, {
        Clock_in: new Date(2018, 01, 04, 8),
        Clock_out: new Date(2018, 01, 04, 16, 30),
        Employee_id: 1004
      }, {
        Clock_in: new Date(2018, 01, 04, 8),
        Clock_out: new Date(2018, 01, 04, 16, 30),
        Employee_id: 1005
      }, {
        Clock_in: new Date(2018, 01, 05, 8),
        Clock_out: new Date(2018, 01, 05, 16, 30),
        Employee_id: 1001
      }, {
        Clock_in: new Date(2018, 01, 05, 8),
        Clock_out: new Date(2018, 01, 05, 16, 30),
        Employee_id: 1002
      }, {
        Clock_in: new Date(2018, 01, 05, 8),
        Clock_out: new Date(2018, 01, 05, 16, 30),
        Employee_id: 1003
      }, {
        Clock_in: new Date(2018, 01, 05, 8),
        Clock_out: new Date(2018, 01, 05, 16, 30),
        Employee_id: 1004
      }, {
        Clock_in: new Date(2018, 01, 05, 8),
        Clock_out: new Date(2018, 01, 05, 16, 30),
        Employee_id: 1005
      }, {
        Clock_in: new Date(2018, 01, 08, 8),
        Clock_out: new Date(2018, 01, 08, 16, 30),
        Employee_id: 1001
      }, {
        Clock_in: new Date(2018, 01, 08, 8),
        Clock_out: new Date(2018, 01, 08, 16, 30),
        Employee_id: 1002
      }, {
        Clock_in: new Date(2018, 01, 08, 8),
        Clock_out: new Date(2018, 01, 08, 16, 30),
        Employee_id: 1003
      }, {
        Clock_in: new Date(2018, 01, 08, 8),
        Clock_out: new Date(2018, 01, 08, 16, 30),
        Employee_id: 1004
      }, {
        Clock_in: new Date(2018, 01, 08, 8),
        Clock_out: new Date(2018, 01, 08, 16, 30),
        Employee_id: 1005
      }, {
        Clock_in: new Date(2018, 01, 09, 8),
        Clock_out: new Date(2018, 01, 09, 16, 30),
        Employee_id: 1001
      }, {
        Clock_in: new Date(2018, 01, 09, 8),
        Clock_out: new Date(2018, 01, 09, 16, 30),
        Employee_id: 1002
      }, {
        Clock_in: new Date(2018, 01, 09, 8),
        Clock_out: new Date(2018, 01, 09, 16, 30),
        Employee_id: 1003
      }, {
        Clock_in: new Date(2018, 01, 09, 8),
        Clock_out: new Date(2018, 01, 09, 16, 30),
        Employee_id: 1004
      }, {
        Clock_in: new Date(2018, 01, 09, 8),
        Clock_out: new Date(2018, 01, 09, 16, 30),
        Employee_id: 1005
      }, {
        Clock_in: new Date(2018, 01, 10, 8),
        Clock_out: new Date(2018, 01, 10, 16, 30),
        Employee_id: 1001
      }, {
        Clock_in: new Date(2018, 01, 10, 8),
        Clock_out: new Date(2018, 01, 10, 16, 30),
        Employee_id: 1002
      }, {
        Clock_in: new Date(2018, 01, 10, 8),
        Clock_out: new Date(2018, 01, 10, 16, 30),
        Employee_id: 1003
      }, {
        Clock_in: new Date(2018, 01, 10, 8),
        Clock_out: new Date(2018, 01, 10, 16, 30),
        Employee_id: 1004
      }, {
        Clock_in: new Date(2018, 01, 10, 8),
        Clock_out: new Date(2018, 01, 10, 16, 30),
        Employee_id: 1005
      }, {
        Clock_in: new Date(2018, 01, 11, 8),
        Clock_out: new Date(2018, 01, 11, 16, 30),
        Employee_id: 1001
      }, {
        Clock_in: new Date(2018, 01, 11, 8),
        Clock_out: new Date(2018, 01, 11, 16, 30),
        Employee_id: 1002
      }, {
        Clock_in: new Date(2018, 01, 11, 8),
        Clock_out: new Date(2018, 01, 11, 16, 30),
        Employee_id: 1003
      }, {
        Clock_in: new Date(2018, 01, 11, 8),
        Clock_out: new Date(2018, 01, 11, 16, 30),
        Employee_id: 1004
      }, {
        Clock_in: new Date(2018, 01, 11, 8),
        Clock_out: new Date(2018, 01, 11, 16, 30),
        Employee_id: 1005
      }, {
        Clock_in: new Date(2018, 01, 12, 8),
        Clock_out: new Date(2018, 01, 12, 16, 30),
        Employee_id: 1001
      }, {
        Clock_in: new Date(2018, 01, 12, 8),
        Clock_out: new Date(2018, 01, 12, 16, 30),
        Employee_id: 1002
      }, {
        Clock_in: new Date(2018, 01, 12, 8),
        Clock_out: new Date(2018, 01, 12, 16, 30),
        Employee_id: 1003
      }, {
        Clock_in: new Date(2018, 01, 12, 8),
        Clock_out: new Date(2018, 01, 12, 16, 30),
        Employee_id: 1004
      }, {
        Clock_in: new Date(2018, 01, 12, 8),
        Clock_out: new Date(2018, 01, 12, 16, 30),
        Employee_id: 1005
      }
    ]);
  }).then(() => {
    return knex.raw(`SELECT setval('clock_data_id_seq', (SELECT MAX(id) FROM clock_data));`);
  })
};
