const {gql} = require('apollo-server-express');

const example = gql`
  type Book {
    title: String
    author: String
  }

  extend type Query {
    books: [Book]
  }
`;

module.exports = example;