const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const newsRoutes = require('./routes/newsRoutes');


// Middleware
app.use(cors())
app.use(express.json());
app.use('/', newsRoutes);


app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error(err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
