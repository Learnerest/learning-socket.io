import express from "express";

const app = express();
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
  } catch (error) {}
};
main();
