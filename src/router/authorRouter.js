import express from 'express';
import AuthorController from '../controller/authorController.js';

const router = express.Router();
const authorController = new AuthorController();

router.get('/authors', authorController.findAllAuthors);
router.get('/authors/:id', authorController.findAuthorById);
router.post('/authors', authorController.createAuthor);
router.put('/authors/:id', authorController.updateAuthor);
router.delete('/authors/:id', authorController.deleteAuthor);

export default router;
