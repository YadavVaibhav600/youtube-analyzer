// setting up routes which accepts youtube video id and returns its transcript 
const { getTranscript } = require('../controllers/transcriptController.js'); 
const express = require('express');
const router = express.Router();


// defining routes for my function below 
router.get('/transcript/:videoId', getTranscript);



// exporting it so server.js can use it 
module.exports = router;