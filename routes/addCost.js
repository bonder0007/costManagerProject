const express = require('express');
const router = express.Router();
const { addCost } = require('../controllers/costsController');

/**
 * POST /api/add
 * Adds a new cost item to the database.
 *
 * @name POST/api/add
 * @function
 * @memberof module:routes/addCost
 * @inner
 */
router.post('/', addCost);

module.exports = router;
