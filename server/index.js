// == libraries ==
const express = require('express');
const mongoose = require('mongoose');

// == applications ==
const config = require('./configs');
const FakeDb = require('./fake-db');

// == routes ==
const trackRoutes = require('./routes/track');

// == main application ==
// initialize database
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
            fakeDb.resetData();
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

// initialize routes
app.use('/api/v1/track', trackRoutes);

// start server
app.listen(process.env.PORT || 3001,
    function () 
    {
        // server running
        console.log('Server started');
    }
);