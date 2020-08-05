const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({"teste" : "ok"});
});

app.get('/download', (request, response) => {
    const file = `${__dirname}/files/lorem-ipsum.pdf`;
    return response.download(file);
});

app.listen(3333);