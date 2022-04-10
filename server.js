'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {
  response.send('Working');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
