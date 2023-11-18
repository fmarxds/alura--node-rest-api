import 'dotenv/config'
import app from './src/app.js';

app.listen(3000, () => {
    console.log('Server listening on port 3000...');
});


// THIS IS HOW TO HANDLE HTTP REQUESTS WITH BUILT-IN HTTP LIBRARY FROM NODE
//
// import http from 'http';
//
// const routes = {
//     '/': JSON.stringify({message: 'NodeJS Hello World!'}),
//     '/api': JSON.stringify({status: 'ok'}),
// }
//
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'content-type': 'application/json'});
//     res.end(routes[req.url]);
// });
//
// server.listen(3000, () => {
//     console.log('Server listening on port 3000...');
// })
