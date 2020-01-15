const fakeDbData = require('./fake-db-data.json');

const Activity = require('./models/activity');
const Track = require('./models/track');

class FakeDb {

    // == constructors ==
    constructor()
    {
        // load fake data
        this.activities = fakeDbData.activity;
        this.tracks = fakeDbData.track;
    } // constructor

    // == methods ==
    loadDbData()
    {
        // load activities
        const activityList = [];
        this.activities.forEach(
            (activity, i) =>
            {
                // create new activity
                const newActivity = new Activity(activity);              
                // save activity
                newActivity.save();
                // store activity list
                activityList.push(newActivity);
            }
        );
    } // loadDbData

} // FakeDb

module.exports = FakeDb;