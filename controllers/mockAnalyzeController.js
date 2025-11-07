const {getMockTranscript} = require('../utils/mockTranscripts');



const analyzeTranscript = async (req , res) => {
    try{
        // getting  the video id 
        const { videoId } = req.params; 
        if(!videoId){
            return res.status(400).json({
                success : false, 
                message : 'video id is required',

            });
        }
    console.log(`Using mock analysis for video ID: ${videoId}`);
        // getting mock Transcript data 
        const transcript = getMockTranscript(videoId);
        
        // preparing mock analysis data based on this thing 
        let analysis;
        if(videoId === 'dQw4w9WgXcQ' ){
            analysis = {
                 summary: "This is a pop song about commitment and loyalty. The singer promises never to give up on, let down, or hurt the person they care about.",
        keyPoints: [
          "The singer emphasizes reliability and devotion",
          "Themes of commitment and emotional support",
          "Repetitive chorus reinforcing the central message"
        ],
        sentiment: "Positive and uplifting",
        tone: "Encouraging and reassuring"

            };

        }
        else{
            analysis =  {
                summary: "This is a mock analysis of the transcript",
        keyPoints: [
          "This is a mock analysis for development purposes",
          "Replace with actual OpenAI analysis in production",
          "When network/API issues are resolved"
        ],
        sentiment: "Neutral",
        tone: "Informative"
            };

        }


        return res.status(200).json({
             success: true,
      videoId,
      analysis,
      message: 'Analysis completed successfully (MOCK DATA)',
      mock: true
        });

        


    }
    catch(error){

        //below we are giving the return error here at this place 
        return res.status(500).json({
            success : false, 
            message : 'Given id is not valid'
        });

    }
}


// exporting the module 
module.exports = {
    analyzeTranscript 
}