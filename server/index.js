const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./configs');
const FakeDb = require('./fake-db');

const trackRoutes = require('./routes/track');
const activityRoutes = require('./routes/activity');
const userRoutes = require('./routes/user');

// initialize database.
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

// activate request body parser
app.use(bodyParser.json());

// initialize routes
app.use('/api/v1/track', trackRoutes);
app.use('/api/v1/activity', activityRoutes);
app.use('/api/v1/user', userRoutes);

// start server
app.listen(process.env.PORT || 3001,
    function () 
    {
        // server running
        console.log('Server started');
    }
);