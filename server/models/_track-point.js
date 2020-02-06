const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gpsCoordinatesSchema = require('./_gps-coordinates');

/**
 * Track point.
 * Defines a track point to be used in gps track.
 * Fields:
 * - gpsCoordinates: gps standard coordinates, based on latitude and longitude
 * - altitude: point altitude
 * - timestamp: point timestamp
 * - temperature: point temperature
 * - heartrate: point heart rate
 */
const trackPointSchema = new Schema(
    {
        gpsCoordinates: gpsCoordinatesSchema,
        altitude: {
            type: Number,
        },
        timestamp: {
            type: Date,
            required: true,
        },
        temperature: {
            type: Number,
        },
        hearthrate: {
            type: Number,
        }
    },
    {
        _id: false
    }
);

module.exports = trackPointSchema;
