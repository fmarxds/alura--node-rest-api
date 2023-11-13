import express from 'express';

const app = express();

app.use(express.json());

const books = [
    {
        id: 1,
        title: 'Hobbit',
    },
    {
        id: 2,
        title: 'The phoenix project',
    }
];

let booksIdCount = 2;

app.get('/', (req, res) => {
    res.status(200).json({status: 'OK'});
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
    const bookId = Number(req.params.id);
    const bookIndex = findBookIndexById(bookId);

    if (bookIndex < 0) {
        res.status(404).send();
        return;
    }

    res.status(200).json(books[bookIndex]);
});

app.post('/books', (req, res) => {
    const bookId = ++booksIdCount;
    books.push({id: bookId, title: req.body.title});
    res.status(201).json(books[findBookIndexById(bookId)]);
});

app.put('/books/:id', (req, res) => {
    const bookId = Number(req.params.id);
    const bookIndex = findBookIndexById(bookId);

    if (bookIndex < 0) {
        res.status(404).send();
        return;
    }

    books[bookIndex] = {...books[bookIndex], ...req.body};

    res.status(200).json(books[bookIndex]);
});

app.delete('/books/:id', (req, res) => {
    const bookId = Number(req.params.id);
    const bookIndex = findBookIndexById(bookId);

    if (bookIndex < 0) {
        res.status(404).send();
        return;
    }

    books.splice(bookIndex, 1);
    res.status(200).send();
});

function findBookIndexById(id) {
    return books.findIndex(book => book.id === id);
}

export default app;
