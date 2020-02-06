/**
 * Waypoint type controller.
 * Contains operation for waypoint type management.
 */
const WaypointType = require('../models/waypoint-type');

/**
 * List all waypoint types.
 * Return list of all waypoint types from database.
 * @param request request from client
 * @param response response to client
 * @return send response with waypoint types array
 */
exports.list = function (request, response)
{
    // load all waypoint types
    WaypointType.find({},
        function (error, waypointTypes)
        {
            // check for errors
            if (error)
            {
                // error during waypoint types load
                return response.status(500).send({ errors: [{ title: 'Waypoint Type error!', details: 'Error loading Waypoint Types' }] });
            }
            // return waypoint types
            return response.status(200).json(waypointTypes);
        }
    );
} // list

/**
 * Create a new waypoint type.
 * Gets waypoint type data from request.
 * Checks there not other waypoint type with the same code.
 * Create new waypoint type.
 * @param request request from client
 * @param response response to client
 * @return send response with created waypoint type
 */
exports.create = function (request, response)
{
    // get waypoint type data
    const { code, name, iconName, color } = request.body;
    // load waypoint type with given code
    WaypointType.findOne({ code },
        function (error, waypointType)
        {
            // check for errors
            if (error)
            {
                // error during waypoint type load
                return response.status(500).send({ errors: [{ title: 'Waypoint Type error!', details: 'Error loading Waypoint Type' }] });
            }
            // check for waypoint type
            if (waypointType)
            {
                // waypoint type with given code exists
                return response.status(422).send({ errors: [{ title: 'Waypoint Type error!', details: 'Waypoint Type with code ' + waypointType.code + ' already exists.' }] });
            }
            // create new waypoint type
            const newWaypointType = new WaypointType({ code, name, iconName, color });
            // save waypoint type
            newWaypointType.save(
                function (error, savedWaypointType)
                {
                    // check for errors
                    if (error)
                    {
                        // error during waypoint type save
                        return response.status(500).send({ errors: [{ title: 'Waypoint Type error!', details: 'Error saving Waypoint Type' }] });
                    }
                    // return saved waypoint type
                    return response.status(201).json(savedWaypointType);
                }
            );
        }
    );
} // create
