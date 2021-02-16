const example = require("./example");
const authentication = require("./authentication");
const job = require("./job");
const {mergeResolvers} = require("@graphql-tools/merge")

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = [
    example,
    authentication,
    job
];

module.exports = mergeResolvers(resolvers);