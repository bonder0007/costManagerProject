var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Route handlers
const usersRouter = require('./routes/usersLogic');
const aboutRouter = require('./routes/about');
const addRouter = require('./routes/addCost');
const reportRouter = require('./routes/report')

// App initialization
const app = express();

// Load environment and connect to MongoDB
require('dotenv').config();
require('./utils/db_connection_costManager');

/**
 * Express application setup and route registration.
 * This module configures middleware, static files, view engine,
 * route endpoints, and error handling for the Cost Manager project.
 */

// View engine configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/usersLogic', usersRouter);
app.use('/api/about', aboutRouter);
app.use('/api/addCost', addRouter);
app.use('/api/report', reportRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;