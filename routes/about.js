const express = require('express');
const router = express.Router();
const { getAbout } = require('../controllers/aboutController');

/**
 * GET /api/about
 * Returns a list of team members from the database.
 *
 * @name GET/api/about
 * @function
 * @memberof module:routes/about
 * @inner
 */
router.get('/', getAbout);

module.exports = router;
