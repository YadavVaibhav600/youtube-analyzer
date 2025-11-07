// file for handling analyze transcript api requests 

const express = require('express');
const router = express.Router()
// const { analyzeTranscript } = require('../controllers/analyzeController');
const {analyzeTranscript} = require('../controllers/mockAnalyzeController');


// router.get('/transcript/analyze/:videoId' , analyzeTranscript);


router.get('/transcript/analyze/:videoId' , analyzeTranscript);

module.exports = router;

