require('dotenv').config();
const OpenAI = require("openai");

// Initialize OpenAI with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to analyze text (you can expand this later)
async function analyzeText(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // lightweight model for quick responses
      messages: [
        { role: "system", content: "You are an assistant that analyzes YouTube transcripts." },
        { role: "user", content: prompt },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI error:", error);
    throw error;
  }
}

module.exports = { analyzeText };
