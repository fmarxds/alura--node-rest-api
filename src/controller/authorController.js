import {author} from '../model/author.js';

class AuthorController {

    async findAllAuthors(req, res) {
        const authorModels = await author.find();
        res.status(200).json(authorModels);
    }

    async findAuthorById(req, res) {
        const authorModel = await author.findById(req.params.id);

        if (!authorModel) {
            res.status(404).json();
            return;
        }

        res.status(200).json(authorModel);
    }

    async createAuthor(req, res) {
        const authorModel = await author.create(req.body);
        res.status(201).json(authorModel);
    }

    async updateAuthor(req, res) {
        const authorModel = await author.findByIdAndUpdate(req.params.id, req.body, {new: true});

        if (!authorModel) {
            res.status(404).json();
            return;
        }

        res.status(200).json(authorModel);
    }

    async deleteAuthor(req, res) {
        await author.findByIdAndDelete(req.params.id);
        res.status(200).json();
    }

}

export default AuthorController;
