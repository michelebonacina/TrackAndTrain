const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

/**
 * User.
 * Defines the authenticated user.
 * Fields:
 * - username: user name
 * - email: user email, used also al login
 * - password: user password
 */
const userSchema = new Schema(
    {
        username: {
            type: String,
            minlength: [2, 'User name min length is 2 chars'],
            maxlength: [32, 'User name min length is 32 chars'],
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: [4, 'User email min length is 4 chars'],
            maxlength: [128, 'User email max length is 128 chars'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
        },
        password: {
            type: String,
            required: true,
            minlength: [4, 'User password min length is 4 chars'],
            maxlength: [32, 'User password max length is 32 chars'],
        }
    },
    {
        collection: 'user'
    }
); // userSchema


/**
 * Checks if a given password and the user password are the same.
 * Given password is clear, so the method encrypt it and compare with user encrypted one.
 * @param requestedPassword passowrd to be checked
 * @returs true if password are the same, false otherwise
 */
userSchema.methods.isPasswordCorrect = function (requestedPassword)
{
    // compare requested and user passwords
    return bcrypt.compareSync(requestedPassword, this.password);
} // isPasswordCorrect

/**
 * Pre user save.
 * Operations executed prior user saving:
 * - crypt user password
 * @param next next middleware function
 */
userSchema.pre('save',
    function (next)
    {
        // get user
        const user = this;
        // generate salt and crypt password
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds,
            function (err, salt)
            {
                bcrypt.hash(user.password, salt,
                    function (err, cryptedPassword)
                    {
                        // store crypted password
                        user.password = cryptedPassword;
                        // proceed with next operation
                        next();
                    }
                );
            }
        );
    }
); // preSave

module.exports = mongoose.model("User", userSchema);