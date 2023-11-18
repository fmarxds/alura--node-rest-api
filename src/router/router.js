import express from 'express';
import bookRouter from './bookRouter.js';
import authorRouter from './authorRouter.js';

const routes = (app) => {
    app.use(express.json(),
        bookRouter,
        authorRouter,
    );
}

export default routes;
