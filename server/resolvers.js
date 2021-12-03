import Todo from './models/Todo.js'
const resolvers = {
    Query:{
        welcome:() =>{
            return "Welcome to Rebuilt!"
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
        addTodo:async(root,args)=>{
            const newTodo = new Todo({title:args.title,detail:args.detail,date:args.date})
            await newTodo.save()
            return newTodo
        },
        deleteTodo:async(root,args)=>{
            await Todo.findByIdAndDelete(args.id);
            return "The todo deleted successfully"
        },
        updateTodo:async(root,args)=>{
            const {id,title,detail,date} = args;
            const updatedTodo = {};
            if (title!=undefined) {
                updatedTodo.title = title
            }
            if (detail!=undefined) {
                updatedTodo.detail = detail
            }
            if (date!=undefined) {
                updatedTodo.date = date
            }
            const todo = await Todo.findByIdAndUpdate(id,updatedTodo, { new: true })

            return todo;
        },
    }

}

export default resolvers;