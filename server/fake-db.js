const fakeDbData = require('./fake-db-data.json');

const User = require('./models/user');
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
        this.user = fakeDbData.user;
        this.activities = fakeDbData.activity;
        this.tracks = fakeDbData.track;
    } // constructor

    /**
     * Delete all data from db.
     */
    async deleteData()
    {
        await User.deleteMany({});
        await Activity.deleteMany({});
        await Track.deleteMany({});
    } // deleteData

    /**
     * Load test data into db.
     */
    loadData()
    {
        // load users
        const userList = [];
        this.user.forEach(
            (user) =>
            {
                // create a new user
                const newUser = new User(user);
                // store in user list
                userList.push(newUser);
            }
        );
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
        // load track
        this.tracks.forEach(
            (track) =>
            {
                // create new track
                const newTrack = new Track(track);
                // set activity
                newTrack.activity = activityList[track._activityNum];
                // set user
                newTrack.user = userList[0];
                userList[0].tracks.push(newTrack);
                // save track
                newTrack.save();
            }
        );
        // save user
        userList.forEach(
            (newUser) =>
            {
                // save user
                newUser.save();
            }
        );
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