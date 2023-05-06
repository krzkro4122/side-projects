import express from 'express';
import os from 'os';

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
    const helloMessage = `<b>VERSION 2: Hello from ${os.hostname()} 👋🏻<b/>\n`;
    console.log(helloMessage);
    response.send(helloMessage);
});

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
