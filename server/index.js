const express = require('express');
const mongoose = require('mongoose');

const config = require('./config');

// initialize database connection
const mongoDbUri = config.DB_URI;
const mongoDbOptions = JSON.parse(config.DB_OPTIONS);
console.log(mongoDbUri);
console.log(mongoDbOptions);
mongoose.connect(mongoDbUri, mongoDbOptions)
    .then(
        () =>
        {
            // connessione effettuata
            console.log('Database connected');
        },
        (error) =>
        {
            // errore nella connessione
            console.log('Database connection error');
            console.log(JSON.stringify(error));
        }
    );

// initialize application
const app = express(); 

// start server
app.listen(process.env.PORT || 3001,
    function () 
    {
        console.log('Server started');
    }
);