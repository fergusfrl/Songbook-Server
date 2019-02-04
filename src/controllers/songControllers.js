import Song from '../models/songSchema';

export const getAllSongs = async () => await Song.find({})

export const getSingleSong = async (_, { id }) => await Song.findById(id);

export const addNewSong = async (_, { input }) => await Song.create(input);

export const editSong = async (_, { id, input }) => await Song.findByIdAndUpdate(id, input, { new: true });

export const deleteSong = async (_, { id }) => await Song.findByIdAndRemove(id);
