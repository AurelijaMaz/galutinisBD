const express = require('express');


const  server = express();




server.get('/', (req, res) => {
    res.send('serveris veikia');
})

server.listen(5000, () => {
    console.log(`Animals server is running on http://localhost:5000`);
});