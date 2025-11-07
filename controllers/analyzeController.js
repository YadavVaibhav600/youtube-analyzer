const Transcript = require('./transcriptController');
const { analyzeText } = require('../utils/openai'); 

// the below function will handle the request for analyzing the transcript which is given to us 
// by the getTranscript function which we had defined 

const analyzeTranscript = async(req , res) => {
    try{
        // below is we are doing destructuring only. 
        const {videoTranscript} =  await Transcript.getTranscript(req.paramas.videoId);

        console.log("here we are in analyze Transcript function");

        if(!videoTranscript){
            res.status(400).json({
                success : false,
                message : 'No Transcript found for this video'
                
            })
        };

        // here we can add the transcript analyzing logic using open ai call at backend 
        //converting Transcript into text string 
        const transcriptText =  VideoTranscript.map( (entry) => entry.text).join(' ');


        const prompt = `Analyze the following YouTube transcript and summarize its key points:\n\n${transcriptText}`;
        const analysis = await analyzeText(prompt);



        res.status(200).json({
            success : true,
            transcript : videoTranscript
            
        });


    }
    catch(error){
        console.error("Error analyzing transcript");
        res.status(500).json({
            sucess : false, 
            message : 'Error analyzing transcript',
            error : error.message
        });

    }
};


// exporting the getTranscript function below 
module.exports = {
    analyzeTranscript : analyzeTranscript 
};