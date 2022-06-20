const { gql } = require("apollo-server-express");
module.exports = gql`
  type User {
    id: ID!
    token: String!
    name: String!
    email: String!
    country_code: String!
    phone: String!
    friends: [Friends]!
    status: String!
    user_status: String!
    createdAt: String!
    updatedAt: String!
  }
  type Friends {
    id: ID
  }
  input RegisterInput {
    name: String!
    email: String!
    country_code: String!
    phone: String!
    password: String!
  }
  type Query {
    getUser: [User]
  }
  type Mutation {
    createUser(registerInput: RegisterInput): User
  }
`;
