const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Generic gps coordinates.
 * Define a standard gps coordinate based on a point, composed by latitude and longitude.
 */
const gpsCoordinatesSchema = new Schema(
    {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    {
        _id: false
    }
);

module.exports = gpsCoordinatesSchema;