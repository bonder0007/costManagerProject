const Cost = require('../models/cost_model');

/**
 * GET /api/report
 * Retrieves all cost items for a specific user, year, and month, grouped by category.
 *
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<void>} Returns a promise that resolves when the response has been sent
 */

const getReport = async (req, res) => {
    try {
        const { id, year, month } = req.query;

        if (!id || !year || !month) {
            return res.status(400).json({ error: 'Missing query parameters' });
        }

        const start = new Date(year, month - 1, 1);
        const end = new Date(year, month, 1);

        const costs = await Cost.find({
            userid: parseInt(id),
            date: { $gte: start, $lt: end }
        });

        const grouped = {
            userid: parseInt(id),
            year: parseInt(year),
            month: parseInt(month),
            costs: {
                food: [],
                health: [],
                housing: [],
                sport: [],
                education: []
            }
        };

        costs.forEach(cost => {
            const day = cost.date.getDate();
            grouped.costs[cost.category].push({
                sum: cost.sum,
                description: cost.description,
                day
            });
        });

        res.json(grouped);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getReport };