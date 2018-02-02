exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del().then(function() {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 1111,
        name: 'Homer Simpson',
        Employee_id: 1001,
        img: "./images/homer.png"
      }, {
        id: 2222,
        name: 'Marge Simpson',
        Employee_id: 1002,
        img:"./images/marge.png"
      }, {
        id: 3333,
        name: 'Bart Simpson',
        Employee_id: 1003,
        img:"./images/bart.jpg"
      }, {
        id: 4444,
        name: 'Lisa Simpson',
        Employee_id: 1004,
        img:"./images/lisa.png"
      }, {
        id: 5555,
        name: 'Maggie Simpson',
        Employee_id: 1005,
        img:"./images/maggie.png"
      }, {
        id: 0000,
        name: 'Mr. Burnes',
        Employee_id: 1000,
        img:"./images/burns.gif",
        isAdmin: true,
        hashPass: "$2a$12$CE.Mimvz008feVVJeslpVeFCUAt4oO.XB3z8A52l8GWbXeJmG5Gia"
      }
    ]);
  }).then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`);
  })
};
