const express = require('express');
const mongoose = require('mongoose');

const config = require('./configs');
const FakeDb = require ('./fake-db');

// initialize database connection
const mongoDbUri = config.DB_URI;
const mongoDbOptions = JSON.parse(config.DB_OPTIONS);
mongoose.connect(mongoDbUri, mongoDbOptions)
    .then(
        () =>
        {
            // db connected
            console.log('Database connected');
            // initialize db
            const fakeDb = new FakeDb();
            fakeDb.deleteData();
            fakeDb.loadData();
            console.log('Sample data created');
        },
        (error) =>
        {
            // connection error
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