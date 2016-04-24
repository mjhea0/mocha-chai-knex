exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('shows').del(),
    // Inserts seed entries
    knex('shows').insert({
      name: 'Suits',
      channel: 'USA Network',
      genre: 'Drama',
      rating: 3,
      explicit: false
    })
    .then(function(response) {
      return knex('shows').insert({
        name: 'Game of Thrones',
        channel: 'HBO',
        genre: 'Fantasy',
        rating: 5,
        explicit: true
      })
      .then(function(response) {
        return knex('shows').insert({
          name: 'South Park',
          channel: 'Comedy Central',
          genre: 'Comedy',
          rating: 4,
          explicit: true
        })
        .then(function(response) {
          return knex('shows').insert({
            name: 'Mad Men',
            channel: 'AMC',
            genre: 'Drama',
            rating: 3,
            explicit: false
          });
        });
      });
    })
  );
};