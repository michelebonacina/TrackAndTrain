const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Track Activity.
 * Defines a track activity.
 * Fields:
 * - code: activity unique code
 * - name: activity name
 * - iconName: name of the icon associated to the activity
 * - color: color of activity
 */
const activitySchema = new Schema(
    {
        code: {
            type: String,
            minlength: [3, 'Activity code min length is 3 chars'],
            maxlength: [20, 'Activity code min length is 20 chars'],
            uppercase: true,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            minlength: [2, 'Activity name min length is 2 chars'],
            maxlength: [50, 'Activity name max length is 50 chars']
        },
        iconName: {
            type: String
        },
        color: {
            type: String
        }
    },
    {
        collection: 'activity'
    }
);

module.exports = mongoose.model("Activity", activitySchema);