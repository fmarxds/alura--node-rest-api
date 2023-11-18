import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: mongoose.Schema.Types.String, required: true},
    nationality: {type: mongoose.Schema.Types.String, required: false}
}, {versionKey: false});

const author = mongoose.model('autores', authorSchema);

export {author, authorSchema};
