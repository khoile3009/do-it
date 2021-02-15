const {gql} = require('apollo-server-express');

const root = require('./root');
const example = require('./example');
const authentication = require("./authentication");
const job = require('./job');

const typeDefs = [root, example, authentication, job];

module.exports = typeDefs;