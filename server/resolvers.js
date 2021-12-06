// import Todo from './models/Todo.js'
// const {Todo} = require('./models/Todo.js')
const { AuthenticationError } = require('apollo-server-express');
const { Profile, Todo } = require('./models');
const { signToken } = require('./utils/auth');

const resolvers = {
    Query:{
        welcome:() =>{
            return "Welcome to Rebuilt!"
        },
        getTodos: async (root,args,context) => {
            if (context.user) {
            const todos = await Todo.find()
            return todos 
        }
              throw new AuthenticationError('Not logged in');
        },
        getTodo: async (root,args,context) => {
            if (context.user) {
            const todo = await Todo.findById(args.id)
            return todo 
        }
                throw new AuthenticationError('Not logged in');

        },
         profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    },
    Mutation:{
        addTodo:async(root,args,context)=>{
            if (context.user) {
            const newTodo = new Todo({title:args.title,detail:args.detail,date:args.date})
            await newTodo.save()
            return newTodo 
        }
                throw new AuthenticationError('Not logged in');
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
        addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
    }

}

// export default resolvers;
module.exports=resolvers