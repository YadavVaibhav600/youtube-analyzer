// First make sure to install this package:
// npm install youtube-captions-scraper --save

const { getSubtitles } = require('youtube-captions-scraper');
const { getMockTranscript } = require('../utils/mockTranscripts');

const getTranscript = async (req, res) => {
  try {
    const { videoId } = req.params;
    
    if (!videoId) {
      return res.status(400).json({
        success: false,
        message: 'Video ID is required'
      });
    }
    
    let transcript;
    
    try {
      console.log(`Attempting to fetch real transcript for video ID: ${videoId}`);
      
      // Try to get real transcript data
      transcript = await getSubtitles({
        videoID: videoId,
        lang: 'en' // Optional language parameter
      });
      
      console.log(`Successfully fetched real transcript for video ID: ${videoId}`);
    } catch (apiError) {
      // If real API fails, fall back to mock data
      console.error('Error fetching from YouTube API:', apiError.message);
      console.log(`Falling back to mock transcript for video ID: ${videoId}`);
      transcript = getMockTranscript(videoId);
    }
    
    res.status(200).json({
      success: true,
      videoId,
      transcript,
      message: 'Transcript fetched successfully'
    });
    
  } catch (error) {
    console.error('Error in getTranscript:', error);
    
    res.status(500).json({
      success: false,
      message: 'Unable to find transcript',
      error: error.message,
      details: error.stack || 'No additional details'
    });
  }
};

module.exports = {
  getTranscript
};