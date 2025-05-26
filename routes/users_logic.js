const express = require('express');
const router = express.Router();
const { getUserDetails } = require('../controllers/users_controller');

/**
 * GET /api/users/:id
 * Returns user details and total cost sum by ID.
 *
 * @name GET/api/users/:id
 * @function
 * @memberof module:routes/users_logic
 * @inner
 */
router.get('/:id', getUserDetails);

module.exports = router;