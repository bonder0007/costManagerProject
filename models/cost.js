const mongoose = require('mongoose');

/**
 * @typedef {Object} Cost
 * @property {number} userid - ID of the user who made the cost
 * @property {string} description - Description of the cost
 * @property {string} category - Category of the cost (food, health, housing, sport, education)
 * @property {number} sum - Sum of the cost in numeric value
 * @property {Date} [date] - Date the cost was made (defaults to now)
 */

const costSchema = new mongoose.Schema({
    userid: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['food', 'health', 'housing', 'sport', 'education'],
        required: true
    },
    sum: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

/**
 * Cost model - represents a single cost entry in the Cost collection.
 */
module.exports = mongoose.model('Cost', costSchema , 'Cost');
