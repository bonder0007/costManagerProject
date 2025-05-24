const express = require('express');
const router = express.Router();
const { getReport } = require('../controllers/reportController');

/**
 * GET /api/report
 * Returns a grouped monthly report for a specific user.
 *
 * @name GET/api/report
 * @function
 * @memberof module:routes/report
 * @inner
 */
router.get('/', getReport);


module.exports = router;