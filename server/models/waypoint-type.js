const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Waypoint type.
 * Defines a waypoint type.
 * Fields:
 * - code: waypoint type code
 * - name: waypoint type name
 * - iconName: waypoint type icon name
 * - color: waypoint type icon color
 */
const waypointTypeSchema = new Schema(
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
        collection: 'waypoint-type'
    }
);

module.exports = mongoose.model("WaypointType", waypointTypeSchema);