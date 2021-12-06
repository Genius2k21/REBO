// import { gql } from 'apollo-server-express';
const {gql} = require ('apollo-server-express')

const typeDefs = gql`
scalar Date
type Todo{
    id:ID
    title:String
    detail:String
    date:Date
}

type Query{
    welcome:String
    getTodos:[Todo]
    getTodo(id:ID):Todo
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
}
type Mutation{
    addTodo(title:String,detail:String,date:Date):Todo
    deleteTodo(id:ID):String
    updateTodo(id:ID,title:String,detail:String,date:Date):Todo
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile: Profile
   
}
type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }
`

// export default typeDefs;
module.exports = typeDefs