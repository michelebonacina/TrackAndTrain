/**
 * User controller.
 * Contains operation for user management.
 */
const User = require('../models/user');
const MongooseHelper = require('../helpers/mongoose');
const jwt = require('jsonwebtoken');

const config = require('../configs');

/**
 * Logins a new user.
 * Checks user credentials and verify authentication.
 * If user is authenticated a token is generated and returned.
 * @param request request from client
 * @param response response to client
 * @return send response with generated token
 */
exports.login = function (request, response)
{
    // get user data
    const { email, password } = request.body;
    // check user data
    if (!email || !password)
    {
        return response.status(422).send({ errors: [{ title: 'Data missing', details: 'Email and password are required' }] });
    }
    // load with given email
    User.findOne({ email },
        function (error, user)
        {
            // check for errors
            if (error)
            {
                // error during activities load
                return response.status(500).send({ errors: MongooseHelper.normalizeError(error.errors) });
            }
            // check for user
            if (!user)
            {
                // user with given email does'nt exists
                return response.status(401).send({ errors: [{ title: 'Invalid user', details: 'User does not exists' }] });
            }
            // check for password
            if (user.isPasswordCorrect(password))
            {
                // generate token
                const token = jwt.sign(
                    {
                        userId: user._id,
                        username: user.username
                    },
                    config.SECRET, { expiresIn: '1h' });
                return response.status(200).json(token);
            }
            else
            {
                // password is wrong
                return response.status(401).send({ errors: [{ title: 'Invalid user', details: 'User does not exists' }] });
            }
        }
    );
} // login

/**
 * Register a new user.
 * Gets data for new user, checks them and checks that no other user exists with the same email.
 * Checks that password and his confirmation are equals.
 * Creates new user.
 * @param request request from client
 * @param response response to client
 * @return send response with created user
 */
exports.register = function (request, response)
{
    // get user data
    const { username, email, password, passwordConfirm } = request.body;
    // check user data
    if (!username || !password || !email)
    {
        return response.status(422).send({ errors: [{ title: 'Data missing', details: 'Username, email and password are required' }] });
    }
    // check password
    if (password !== passwordConfirm)
    {
        return response.status(422).send({ errors: [{ title: 'Password error', details: 'Passowrd and confirmation password are not the same' }] });
    }
    // load user with given email
    User.findOne({ email },
        function (error, user)
        {
            // check for errors
            if (error)
            {
                // error during user load
                return response.status(500).send({ errors: MongooseHelper.normalizeError(error.errors) });
            }
            // check for user
            if (user)
            {
                // user with given email exists
                return response.status(422).send({ errors: [{ title: 'User duplicated', details: 'User with email ' + user.email + ' already exists' }] });
            }
            // create new user
            const newUser = new User({ username, email, password });
            // save user
            newUser.save(
                function (error, createdUser)
                {
                    // check for errors
                    if (error)
                    {
                        // error during user save
                        return response.status(500).send({ errors: MongooseHelper.normalizeError(error.errors) });
                    }
                    // return saved user
                    return response.status(201).json(createdUser);
                }
            );
        }
    );
} // register

exports.authenticationMiddleware = function (request, response, next)
{
    // get passed token
    const token = request.headers.authorization;
    // check token
    if (token)
    {
        const user = parseToken(token);
    }
    else
    {
        // password is wrong
        return response.status(401).send({ errors: [{ title: 'Not authenticated', details: 'You need to login to ge access' }] });
    }

} // authenticationMiddleware

/**
 * Decode and parse token for getting user data.
 * @param token encoded token
 * @returns decoded token
 */
parseToken = function (token)
{
    // decode token 
    return jwt.verify(token.split(' ')[1], config.SECRET);
} // parseToken
