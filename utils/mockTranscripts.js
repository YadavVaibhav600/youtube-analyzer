// utils/mockTranscripts.js

// More realistic mock transcripts for development
const mockTranscripts = {
  // Rick Astley - Never Gonna Give You Up
  'dQw4w9WgXcQ': [
    { text: "We're no strangers to love", start: 0, duration: 4.5 },
    { text: "You know the rules and so do I", start: 4.5, duration: 3.8 },
    { text: "A full commitment's what I'm thinking of", start: 8.3, duration: 4.2 },
    { text: "You wouldn't get this from any other guy", start: 12.5, duration: 4.3 },
    { text: "I just wanna tell you how I'm feeling", start: 16.8, duration: 3.7 },
    { text: "Gotta make you understand", start: 20.5, duration: 3.5 },
    { text: "Never gonna give you up", start: 24.0, duration: 3.0 },
    { text: "Never gonna let you down", start: 27.0, duration: 3.2 },
    { text: "Never gonna run around and desert you", start: 30.2, duration: 3.8 },
    { text: "Never gonna make you cry", start: 34.0, duration: 3.0 },
    { text: "Never gonna say goodbye", start: 37.0, duration: 3.0 },
    { text: "Never gonna tell a lie and hurt you", start: 40.0, duration: 4.0 }
  ],
  
  // Add a second video - TED Talk example
  'jAemh_JxgOk': [
    { text: "Today I want to talk about the power of artificial intelligence", start: 0, duration: 5.0 },
    { text: "and how it's transforming our world in ways we never imagined", start: 5.0, duration: 4.5 },
    { text: "From healthcare to transportation, AI is revolutionizing industries", start: 9.5, duration: 4.8 },
    { text: "But with great power comes great responsibility", start: 14.3, duration: 3.7 },
    { text: "We need to ensure these systems are designed ethically", start: 18.0, duration: 4.0 },
    { text: "and that the benefits are distributed fairly across society", start: 22.0, duration: 4.3 },
    { text: "Let me share some examples of how this is playing out", start: 26.3, duration: 3.7 },
    { text: "in various fields from medicine to education", start: 30.0, duration: 3.5 }
  ],
  
  // Default for any other video ID
  'default': [
    { text: "This is a mock transcript for development purposes", start: 0, duration: 5 },
    { text: "Replace with real transcript in production", start: 5, duration: 5 },
    { text: "When network restrictions are resolved", start: 10, duration: 5 },
    { text: "This can be used for testing the analysis pipeline", start: 15, duration: 5 },
    { text: "without requiring external API access", start: 20, duration: 5 },
    { text: "The OpenAI analysis should still work properly", start: 25, duration: 5 },
    { text: "with this mock data to test the complete flow", start: 30, duration: 5 }
  ]
};

function getMockTranscript(videoId) {
  // Return specific mock transcript if available, otherwise return default
  return mockTranscripts[videoId] || mockTranscripts['default'];
}

module.exports = {
  getMockTranscript
};