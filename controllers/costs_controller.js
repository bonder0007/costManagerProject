const Cost = require('../models/cost_model');

/**
 * POST /api/add
 * Adds a new cost item to the database.
 *
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<void>} Returns a promise that resolves when the response has been sent
 */

// Define an asynchronous function to handle the creation of a new cost entry
const addCost = async (req, res) => {
    try {
        const { userid, description, category, sum, date } = req.body;

        if (
            userid === undefined ||
            description === undefined ||
            category === undefined ||
            sum === undefined
        ) {
            return res.status(400).send({ error: 'Invalid cost body' });
        }

        const cost = new Cost({
            userid,
            description,
            category,
            sum,
            date: date || undefined
        });

        const savedCost = await cost.save();
        res.status(201).json(savedCost);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

module.exports = { addCost };