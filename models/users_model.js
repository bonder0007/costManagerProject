const mongoose = require('mongoose');

/**
 * @typedef {Object} User
 * @property {number} id - Unique numeric identifier for the user
 * @property {string} first_name - User's first name
 * @property {string} last_name - User's last name
 * @property {Date} birthday - User's date of birth
 * @property {string} marital_status - Marital status of the user
 */

const userSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    birthday: Date,
    marital_status: String,
});

/**
 * User model - represents a single user in the User collection.
 */
module.exports = mongoose.model('User', userSchema, 'User');