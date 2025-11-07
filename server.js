const express = require('express');

// importing the routes file 
const transcriptRoutes = require('./routes/transcript');
const analyzeRoutes = require('./routes/analyze');

const app = express()
require('dotenv').config();

const cors = require('cors');
app.use(cors({
     origin: ['http://localhost:3001', 'https://your-frontend-app-name.netlify.app']
}));

app.use(express.json());
app.use(cors());

// connecting the routes file to our app 
app.use('/api' , transcriptRoutes);
app.use('/api' , analyzeRoutes);



app.get('/health' , (req , res) => {
    res.status(200).json({ status: 'OK', message: 'Server is healthy' })
})

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


