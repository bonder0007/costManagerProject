const mongoose = require('mongoose');
require('dotenv').config();

/**
 * Connects to the MongoDB database using the MONGO_URI environment variable.
 * Logs connection status to the console.
 */
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to DB!');
    })
    .catch((err) => {
        console.error('Unable to connect, error: ' + err.toString());
    });