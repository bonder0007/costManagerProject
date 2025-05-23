const express = require('express');
const router = express.Router();
const { getUserDetails } = require('../controllers/usersController');

/**
 * GET /api/users/:id
 * Returns user details and total cost sum by ID.
 *
 * @name GET/api/users/:id
 * @function
 * @memberof module:routes/usersLogic
 * @inner
 */
router.get('/:id', getUserDetails);

module.exports = router;
