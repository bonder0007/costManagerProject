const userReq = require('../models/users_model');
const costReq = require('../models/cost_model');

/**
 * GET /api/users/:id
 * Retrieves user details along with the total cost sum for that user.
 *
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<void>} Returns a promise that resolves when the response has been sent
 */

const getUserDetails = async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await userReq.findOne({ id: userId });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const costs = await costReq.find({ userid: userId });
        const total = costs.reduce((sum, cost) => sum + cost.sum, 0);

        res.json({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            total
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getUserDetails };