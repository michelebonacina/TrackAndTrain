// == data sources ==
const fakeDbData = require('./fake-db-data.json');

// == models ==
const Activity = require('./models/activity');
const Track = require('./models/track');

// initialize db with test data
class FakeDb
{

    // == constructors ==
    constructor()
    {
        // load fake data
        this.activities = fakeDbData.activity;
        this.tracks = fakeDbData.track;
    } // constructor

    // == methods ==
    // delete sample data from database
    async deleteData()
    {
        await Track.deleteMany({});
        await Activity.deleteMany({});
    } // deleteData

    // load sample data to database
    loadData()
    {
        // load activities
        const activityList = [];
        this.activities.forEach(
            (activity) =>
            {
                // create new activity
                const newActivity = new Activity(activity);
                // save activity
                newActivity.save();
                // store activity list
                activityList.push(newActivity);
            }
        );
        this.tracks.forEach(
            (track) =>
            {
                // create new track
                const newTrack = new Track(track);
                // set activity
                newTrack.activity = activityList[track._activityNum];
                // save track
                newTrack.save();
            }
        )
    } // loadData

    // initialize database
    async resetData()
    {
        await this.deleteData();
        await this.loadData();
    } // reset data

} // FakeDb

module.exports = FakeDb;