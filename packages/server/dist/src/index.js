"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const isDevelopment = process.env.NODE_ENV !== "production";
const port = isDevelopment ? 3000 : null;
const main = () => {
    try {
        app.get("/", (req, res) => {
            res.send("Hello World!");
        });
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    }
    catch (error) { }
};
main();
//# sourceMappingURL=index.js.map