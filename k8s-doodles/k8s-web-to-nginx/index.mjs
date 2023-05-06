import express from 'express';
import fetch from 'node-fetch';
import os from 'os';

const app = express();
const PORT = 3000;

app.get("/", (_request, response) => {
    const helloMessage = `<b>VERSION 2: Hello from ${os.hostname()} 👋🏻<b/>\n`;
    console.log(helloMessage);
    response.send(helloMessage);
});

app.get("/nginx", async (_request, response) => {
    const url = 'http://nginx';
    const fromNginx = await fetch(url);
    const body = await fromNginx.text();
    response.send(body);
});

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
