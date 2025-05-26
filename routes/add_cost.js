const express = require('express');
const router = express.Router();
const { addCost: add_cost } = require('../controllers/costs_controller');

/**
 * POST /api/add
 * Adds a new cost item to the database.
 *
 * @name POST/api/add
 * @function
 * @memberof module:routes/add_cost
 * @inner
 */
router.post('/', add_cost);

module.exports = router;