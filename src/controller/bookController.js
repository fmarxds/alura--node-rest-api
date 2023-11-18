import book from '../model/book.js';
import {author} from '../model/author.js';
import mongoose from 'mongoose';

class BookController {

    async findAllBooks(req, res) {
        const booksModels = await book.find();
        res.status(200).json(booksModels);
    }

    async findBookById(req, res) {
        const bookModel = await book.findById(req.params.id);

        if (!bookModel) {
            res.status(404).json();
            return;
        }

        res.status(200).json(bookModel);
    }

    async createBook(req, res) {
        const newBook = req.body;

        if (newBook.author) {
            const authorModel = await author.findById(newBook.author);
            if (!authorModel) {
                res.status(404).json({message: 'Author not found!'});
                return;
            }
            newBook.author = {...authorModel._doc};
        }

        const bookModel = await book.create(newBook);
        res.status(201).json(bookModel);
    }

    async updateBook(req, res) {
        const bookModel = await book.findByIdAndUpdate(req.params.id, req.body, {new: true});

        if (!bookModel) {
            res.status(404).json();
            return;
        }

        res.status(200).json(bookModel);
    }

    async deleteBook(req, res) {
        await book.findByIdAndDelete(req.params.id);
        res.status(200).json();
    }

    async findBookByPublisher(req, res) {
        const publisher = req.query.publisher;
        const bookModel = await book.find({publisher});

        if (!bookModel) {
            res.status(404).json();
            return;
        }

        res.status(200).json(bookModel);
    }

}

export default BookController;
