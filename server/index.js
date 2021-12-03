import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

async function initServer(){
    const app = express()
    app.use(cors());
    dotenv.config();
    const ApolloServer = new ApolloServer({ typeDefs, resolvers })
    await ApolloServer.start();
    ApolloServer.applyMiddleware({ app })
    app.use((req, res) => {
        res.send("Server started sucessfully")
    })
    const PORT = process.env.PORT ||5000;
    try {
        await mongoose.connect(process.env.mongodb);
        console.log(`Connected to MongoDB at port ${PORT}`)
    } catch (error) {
        console.log(error)
    }

    app.listen(PORT, () =>
        console.log(`Express server is running on port ${PORT}`))
}