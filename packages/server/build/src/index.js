"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = express_1.default();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
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
    }
    catch (error) { }
};
main();
//# sourceMappingURL=index.js.map