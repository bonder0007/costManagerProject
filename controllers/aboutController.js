const User = require('../models/users');

/**
 * GET /api/about
 * Retrieves a list of team members (developers) with only first and last names.
 *
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<void>} Returns a promise that resolves when the response has been sent
 */

const getAbout = async (req, res) => {
    try {
        const team = await User.find({}, { _id: 0, first_name: 1, last_name: 1 });
        res.json(team);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAbout };

