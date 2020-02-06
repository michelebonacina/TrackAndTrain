const fakeDbData = require('./fake-db-data.json');

const User = require('./models/user');
const Activity = require('./models/activity');
const WaypointType = require('./models/waypoint-type');
const Waypoint = require('./models/waypoint');
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
        this.waypointTypes = fakeDbData.waypointType;
        this.waypoints = fakeDbData.waypoint;
        this.tracks = fakeDbData.track;
    } // constructor

    /**
     * Delete all data from db.
     */
    async deleteData()
    {
        await User.deleteMany({});
        await Activity.deleteMany({});
        await WaypointType.deleteMany({});
        await Waypoint.deleteMany({});
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
        const activityList = new Map();
        this.activities.forEach(
            (activity) =>
            {
                // create new activity
                const newActivity = new Activity(activity);
                // save activity
                newActivity.save();
                // store activity list
                activityList.set(newActivity.code, newActivity);
            }
        );
        const waypointTypeList = new Map();
        this.waypointTypes.forEach(
            (waypointType) =>
            {
                // create a new waypoint type
                const newWaypointType = new WaypointType(waypointType);
                // save activity
                newWaypointType.save();
                // store waypoint type list
                waypointTypeList.set(newWaypointType.code, newWaypointType);
            }
        )
        // load waypoint
        this.waypoints.forEach(
            (waypoint) =>
            {
                // create new waypoint
                const newWaypoint = new Waypoint(waypoint);
                // set waypoint type
                newWaypoint.type = waypointTypeList.get(waypoint._waypointTypeCode);
                // set user
                newWaypoint.user = userList[0];
                userList[0].waypoints.push(newWaypoint);
                // save waypoint
                newWaypoint.save();
            }
        )
        // load track
        this.tracks.forEach(
            (track) =>
            {
                // create new track
                const newTrack = new Track(track);
                // set activity
                newTrack.activity = activityList.get(track._activityCode);
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