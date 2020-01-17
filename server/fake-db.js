const fakeDbData = require('./fake-db-data.json');

const Activity = require('./models/activity');
const Track = require('./models/track');

/**
 * Initializes db with test data.
 */
class FakeDb
{

    /**
     * Create a new fake db class.
     */
    constructor()
    {
        // load fake data
        this.activities = fakeDbData.activity;
        this.tracks = fakeDbData.track;
    } // constructor

    /**
     * Delete all data from db.
     */
    async deleteData()
    {
        await Track.deleteMany({});
        await Activity.deleteMany({});
    } // deleteData

    /**
     * Load test data into db.
     */
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

    /**
     * Initializes db.
     * Removes all data ad inserts new ones.
     */
    async resetData()
    {
        await this.deleteData();
        await this.loadData();
    } // reset data

} // FakeDb

module.exports = FakeDb;