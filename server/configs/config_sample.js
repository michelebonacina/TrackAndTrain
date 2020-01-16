/**
 * Application configuration file sample.
 * Two copies of this file are needed:
 * - dev.js for develompment configuration, which use express configuration strings
 * - prod.js for production configuration, which refers to same variables configured
 *   in the deployment server
 */
module.exports = {
    // MongoDB url connection string
    DB_URI: 'mongodb://<user>:<password>@<srver>:<port>/<database>',
    // MongoDB database options
    DB_OPTIONS: '<options>',
    // random string for enconding key generation
    SECRET: '<random string>'
}