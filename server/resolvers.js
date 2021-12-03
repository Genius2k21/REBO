import Todo from "./models/Todo.js";

const resolvers = {
    Query: {
        welcome: () => {
            return "Welcome to Rebuild"
        },
        getTodos: async () => {
            const todos = await Todo.find()
            return todos 
        },
        getTodo: async (root,args) => {
            const todo = await Todo.findById(args.id)
            return todo
        },
    },
    Mutation:{
        addTodo: async (root,args) => {
            const newTodo = new Todo({ title: args.title, detail: args.detail, date: args.date })
            await newTodo.save()
            return newTodo
        },
        deleteTodo: async (root,args) => {
            await Todo.findByIdAndDelete(args.id);
            return "Deleted successfully"
        }
    }
}

export default resolvers;