const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path:'server/.env'});
const animalRouter = require('./routes/animals')

const  server = express();
const { SERVER_PORT } = process.env;

//Midlewares
server.use(cors());

//Add routes

server.use('/animals', animalRouter);

server.get('/', (req, res) => {
    res.send('serveris veikia');
})

server.listen(SERVER_PORT, () => {
    console.log(`Animals server is running on http://localhost:${SERVER_PORT}`);
});