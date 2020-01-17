/**
 * Activity controller.
 * Contains operation for avtivity management.
 */
const Activity = require('../models/activity');

/**
 * List all activities.
 * Return list of all activities from database.
 * @param request request from client
 * @param response response to client
 * @return send response with activities array
 */
exports.list = function (request, response)
{
    // load all activities
    Activity.find({}).exec(
        function (error, activities)
        {
            // check for errors
            if (error)
            {
                return response.status(422).send({ errors: [{ title: 'Activity error!', details: 'Error loading Actviities' }] });
            }
            // return actvities
            return response.status(200).json(activities);
        }
    );
} // list
