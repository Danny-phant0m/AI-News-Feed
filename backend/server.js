const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const newsRoutes = require('./routes/newsRoutes');

app.use('/api', newsRoutes);

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3001' // only for frontend url
}));


// Basic route
app.get('/', (req, res) => {
    res.send('AI News Feed API');
});

// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error(err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
