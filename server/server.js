const express = require('express');
const apiRouter = require('./routes');

const app = express();

app.use(express.json());

app.use('/api',apiRouter);




app.listen(3000, () => console.log("Server running (p3000)."));