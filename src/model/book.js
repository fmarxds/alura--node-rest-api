import mongoose from 'mongoose';
import {authorSchema} from './author.js';

const bookSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: mongoose.Schema.Types.String, required: true},
    publisher: {type: mongoose.Schema.Types.String, required: false},
    price: {type: mongoose.Schema.Types.Number, required: true},
    pages: {type: mongoose.Schema.Types.Number, required: true},
    author: {type: authorSchema, required: false},
}, {versionKey: false});

const book = mongoose.model('livros', bookSchema);

export default book;
