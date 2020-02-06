const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const trackPointSchema = require('./_track-point');

/**
 * Track.
 * Defines a track.
 * Fields:
 * - startedAt: track initial date/time
 * - title: track title
 * - description: track description
 * - activity: track activity type
 * - duration: track duration, as a standard date
 * - distance: track distance in kilometers
 * - ascent: track ascent in meter
 * - createdAt: track creation date/time
 * - user: user created the track
 */
const trackSchema = new Schema(
    {
        startedAt: {
            type: Date,
            required: 'Track start date is mandatory'
        },
        title: {
            type: String,
            required: true,
            minlength: [2, 'Track title min length is 2 chars'],
            maxlength: [50, 'Track title max length is 50 chars']
        },
        description: {
            type: String,
            minlength: [2, 'Track description min length is 2 chars'],
            maxlength: [255, 'Track description max length is 255 chars']
        },
        activity: {
            type: Schema.Types.ObjectId,
            ref: 'Activity'
        },
        duration: {
            type: Date,
            required: true
        },
        distance: {
            type: Number,
            required: true
        },
        ascent: {
            type: Number,
            required: true
        },
        trackPoints: [trackPointSchema],
        createdAt: {
            type: Date,
            required: true,
            default: Date.now
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        collection: 'track'
    }
);

module.exports = mongoose.model("Track", trackSchema);