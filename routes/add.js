const express = require('express');
const router = express.Router();
const { addCost: add } = require('../controllers/costs_controller');

/**
 * POST /api/add
 * Adds a new cost item to the database.
 *
 * @name POST/api/add
 * @function
 * @memberof module:routes/add
 * @inner
 */
router.post('/', add);

module.exports = router;