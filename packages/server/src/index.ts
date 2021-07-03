import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const isDevelopment = process.env.NODE_ENV !== 'production';

const port = isDevelopment ? 8000 : null;

const main = () => {
  try {
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    io.on('connection', (socket) => {
      console.log('a user connected', socket.id);
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (error) {}
};
main();
