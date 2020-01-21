/**
 * Track controller.
 * Contains operation for track management.
 */
const Track = require('../models/track');

/**
 * List all tracks.
 * Return list of all tracks from database.
 * @param request request from client
 * @param response response to client
 * @return send response with tracks array
 */
exports.list = function (request, response)
{
    // load all tracks
    Track.find({}).populate('activity').exec(
        function (error, tracks)
        {
            // check for errors
            if (error)
            {
                return response.status(422).send({ errors: [{ title: 'Track error!', details: 'Error loading Tracks' }] });
            }
            // return tracks
            return response.status(200).json(tracks);
        }
    );
} // list

/**
 * Load a track.
 * Return full loaded track from database.
 * The request contains params:
 * - id: track identifier
 * 
 * @param request request from client
 * @param response response to client
 * @return send response with tracks array
 */
exports.loadById = function (request, response)
{
    // get track id
    const trackId = request.params.id;
    // load track
    Track.findById(trackId).populate('activity').exec(
        function (error, track)
        {
            // check for errors
            if (error)
            {
                return response.status(422).send({ errors: [{ title: 'Track error!', details: 'Could not find Track' }] });
            }
            // return track
            return response.status(200).json(track);
        }
    );
} // load
