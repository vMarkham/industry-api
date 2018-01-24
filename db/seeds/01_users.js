exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name:'Homer Simpson', Employee_id:1},
        {id: 2, name:'Marge Simpson', Employee_id:2},
        {id: 3, name:'Bart Simpson', Employee_id:3},
        {id: 4, name:'Lisa Simpson', Employee_id:4},
        {id: 5, name:'Maggie Simpson', Employee_id:5},
        {id: 6, name: 'Mr. Burnes', Employee_id:6, isAdmin:true}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    })
};
