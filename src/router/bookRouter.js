import express from 'express';
import BookController from '../controller/bookController.js';

const router = express.Router();
const bookController = new BookController();

router.get('/books', bookController.findAllBooks);
router.get('/books/search', bookController.findBookByPublisher)
router.get('/books/:id', bookController.findBookById);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

export default router;
