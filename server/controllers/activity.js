/**
 * Activity controller.
 * Contains operation for activity management.
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
    Activity.find({},
        function (error, activities)
        {
            // check for errors
            if (error)
            {
                // error during activities load
                return response.status(500).send({ errors: [{ title: 'Activity error!', details: 'Error loading Actviities' }] });
            }
            // return actvities
            return response.status(200).json(activities);
        }
    );
} // list

/**
 * Create a new activity.
 * Gets activity data from request.
 * Checks there not other activity with the same code.
 * Create new activity.
 * @param request request from client
 * @param response response to client
 * @return send response with created activity
 */
exports.create = function (request, response)
{
    // get activity data
    const { code, name, iconName, color } = request.body;
    // load activity with given code
    Activity.findOne({ code },
        function (error, activity)
        {
            // check for errors
            if (error)
            {
                // error during activity load
                return response.status(500).send({ errors: [{ title: 'Activity error!', details: 'Error loading Actviity' }] });
            }
            // check for activity
            if (activity)
            {
                // activity with given code exists
                return response.status(422).send({ errors: [{ title: 'Activity error!', details: 'Activity with code ' + activity.code + ' already exists.' }] });
            }
            // create new activity
            const newActivity = new Activity({ code, name, iconName, color });
            // save activity
            newActivity.save(
                function (error, savedActivity)
                {
                    // check for errors
                    if (error)
                    {
                        // error during activity save
                        return response.status(500).send({ errors: [{ title: 'Activity error!', details: 'Error saving Actviity' }] });
                    }
                    // return saved activity
                    return response.status(201).json(savedActivity);
                }
            );
        }
    );
} // create
