/**
 * Configuration initialization, depending of deployment type.
 */
if (process.env.NODE_ENV === 'production')
{
    // production deployment
    module.exports = require('./prod');
}
else
{
    // development deployment
    module.exports = require('./dev');
}