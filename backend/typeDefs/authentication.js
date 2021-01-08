const {gql} = require('apollo-server-express');

const authentication = gql`
  type User{
      email: String,
      id: String,
      token: String,
      first_name: String, 
      last_name:String
  }

  type UserInfo{
    email: String,
    id: String,
    first_name: String, 
    last_name:String
}

  input RegisterInput{
    email: String!, 
    password: String!,
    first_name: String!,
    last_name: String!,
    
  }

  input LoginInput{
    email: String!,
    password: String!
  }

  extend type Query{
    retrieveUser: User!
  }

  extend type Mutation{
    register(
      registerInput: RegisterInput
    ):User!
    
    emailExists(
      email:String!
    ):Boolean!

    login(
      loginInput: LoginInput
    ): User!
  }
`;

module.exports = authentication;