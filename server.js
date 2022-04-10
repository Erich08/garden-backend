'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const getWeather = require('./modules/weather_data');

app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/weather', getWeather);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
