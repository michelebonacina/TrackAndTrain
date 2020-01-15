const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema(
    {
        startTime: {
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
            type: Number,
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
        creationTime: {
            type: Date,
            required: true,
            default: Date.now
        }
    },
    {
        collection: 'track'
    }
);

module.exports = mongoose.model("Track", trackSchema);