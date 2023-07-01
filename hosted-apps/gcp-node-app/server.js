const express = require("express");
const { readFile } = require("fs").promises;

const app = express();
console.log(__dirname);
app.use(express.static(__dirname + "/"));

app.get("/", async (request, response) => {
  response.send(await readFile("./index.html", "utf-8"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`App available on http://localhost:${PORT}`)
);
