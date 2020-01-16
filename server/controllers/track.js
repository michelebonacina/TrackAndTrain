// == models ==
const Track = require('../models/track');

// == methods == 
// list all tracks
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

// load a track
// - id: track identifier
exports.load = function (request, response)
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