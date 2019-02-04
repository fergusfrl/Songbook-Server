import { gql } from 'apollo-server-express';
import {
    getAllSongs, getSingleSong, addNewSong, editSong, deleteSong
} from '../controllers/songControllers';

export const typeDefs = gql`
    type Song {
        id: ID!
        title: String!
        artist: String
        album: String
        tags: String
        lyrics: String!
        chords: String
    }

    type Query {
        song(id: ID!): Song
        songs: [Song]
    }

    input SongInput {
        title: String
        artist: String
        album: String
        tags: String
        lyrics: String
        chords: String
    }

    type Mutation {
        addNewSong(input: SongInput!): Song
        editSong(id: ID!, input: SongInput): Song
        deleteSong(id: ID!): Song
    }

`;

export const resolvers = {
    Query: {
        song: getSingleSong,
        songs: getAllSongs
    },
    Mutation: {
        addNewSong,
        editSong,
        deleteSong
    }
};
