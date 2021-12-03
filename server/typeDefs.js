import { gql } from 'apollo-server-express';

const typeDefs = gql`
scaler Date
type Todo{
    id:ID
    title:String
    detail: String
    date: Date
}

type Query{
    welcome:String 
    getTodos;[Todo]
    getTodo(id:ID):Todo 
}
type Mutation{
    addTodo(title:String,detail:String,date:Date);Todo
    deleteTodo(id:ID):String
    udpateTodo(id:ID,title:String,detail:String,date:Date):Todo
}
`

export default typeDefs;