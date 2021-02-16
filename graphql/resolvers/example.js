const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const example = {
    Query: {
      books: () => books,
    },
  };

module.exports = example;