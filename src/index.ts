import express from "express";
import * as http from "http";

const app = express();
const server = http.createServer(app);
const port = 3000;

app.use(express.json());
app.get("/", (_, res) => {
  res.status(200).send({ status: "ok" });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
