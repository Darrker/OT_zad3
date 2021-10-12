const express = require('express');
const path = require('path');
const moment = require('moment');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (request, response) =>{
    response.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/getDate', (request, response) =>{
    response.send(moment().format('DD/MM/YYYY, h:mm:ss '));
});

app.listen(port);

