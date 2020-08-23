'use strict';

const express = require('express');

// Constants comment
const PORT = 8080;
const HOST = '0.0.0.0';

// App comment
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:green;">Java Home App - version-10!!</h1> \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
