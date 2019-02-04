import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import { resolvers, typeDefs } from './schema/schema';

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

// Connect to MLab MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true
});

server.applyMiddleware({ app });

app.get('/', (req, res) => res.send({ hello: 'there!' }));

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
