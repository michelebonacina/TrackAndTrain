const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gpsCoordinatesSchema = require('./_gps-coordinates');

/**
 * Generic gps point.
 * Defines a generic gps point to be used in gps elements.
 * Fields:
 * - gpsCoordinates: gps standard coordinates, based on latitude and longitude
 * - altitude: point altitude
 */
const pointSchema = new Schema(
    {
        gpsCoordinates: gpsCoordinatesSchema,
        altitude: {
            type: Number,
        }
    },
    {
        _id: false
    }
);

module.exports = pointSchema;