import mongoose from 'mongoose';

const { Schema } = mongoose;

const songSchema = new Schema({
    title: { type: String, required: true },
    artist: { type: String },
    album: { type: String },
    tags: { type: [String] },
    lyrics: { type: String, required: true },
    chords: { type: String }
});

export default mongoose.model('song', songSchema);
