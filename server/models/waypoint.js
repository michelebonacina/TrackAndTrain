const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pointSchema = require('./_point');

/**
 * Waypoint.
 * Defines a waypoint.
 * Fields:
 * - name: waypoint name
 * - description: waypoint description
 * - type: waypoint type
 * - createdAt: track creation date/time
 * - user: user created the track
 */
const waypointSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: [2, 'Waypoint name min length is 2 chars'],
            maxlength: [50, 'Waypoint name max length is 50 chars']
        },
        description: {
            type: String,
            minlength: [2, 'Waypoint description min length is 2 chars'],
            maxlength: [255, 'Waypoint description max length is 255 chars']
        },
        type: {
            type: Schema.Types.ObjectId,
            ref: 'WaypointType'
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now
        },
        point: pointSchema,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        collection: 'waypoint'
    }
);

module.exports = mongoose.model("Waypoint", waypointSchema);