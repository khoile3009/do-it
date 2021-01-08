const {ApolloServer} = require('apollo-server-express');

const express = require('express');
const mongoose    = require("mongoose");




const {MONGODB} = require("./configs");


const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const contexts = require("./contexts");


console.log(MONGODB)
// mongoose setup
mongoose.connect(
    MONGODB, 
    {useNewUrlParse: true, useFindAndModify: true, useCreateIndex: true}
).then(
    (val) => {
        console.log('Success');
    }
);


const server = new ApolloServer(
    {
        typeDefs, 
        resolvers,
        context: contexts
    }
);

// Express auth setup
const app = express();
// app.use(passport.initialize()); 
// app.use(passport.session()); 

// passport.serializeUser(User.serializeUser()); 
// passport.deserializeUser(User.deserializeUser()); 
  
// const LocalStrategy = require('passport-local').Strategy; 
// passport.use(new LocalStrategy(User.authenticate())); 


server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);