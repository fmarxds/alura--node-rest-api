import express from 'express';
import connect from './config/database.js';
import routes from './router/router.js';

const app = express();
await connect();

routes(app);

export default app;
