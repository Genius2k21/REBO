// import express from 'express';
// import {ApolloServer, gql} from 'apollo-server-express';
// import typeDefs from './typeDefs.js';
// import resolvers from './resolvers.js';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { authMiddleware } from './utils/auth.js';
const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth.js');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
const path = require('path');

// ADDITIONS
// const db = require('./config/connection');

// module.exports = { typeDefs, resolvers };


async function initServer(){
    const app = express()
    app.use(cors());
    dotenv.config();
    const apolloServer = new ApolloServer({typeDefs, resolvers, context: authMiddleware})

    // apolloServer.applyMiddleware({ app });
    
    await apolloServer.start()
    apolloServer.applyMiddleware({app})
    app.use((req,res)=>{
        res.send("Server started successfully")
    })
    const PORT = process.env.PORT || 5000;

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // Serve up static assets
    app.use('/images', express.static(path.join(__dirname, '../client/images')));

    if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    }

    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });

    try {
        await mongoose.connect(process.env.mongodb)
        //   await mongoose.connect(process.env.mongodb, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log(`Connected to MongoDB at port ${PORT}`)
    } catch (error) {
        console.log(error)
    }
    
    app.listen(PORT, ()=>
    console.log(`Express server is running on port ${PORT}`))
}

initServer()

// module.exports = { typeDefs, resolvers };