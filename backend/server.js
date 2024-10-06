const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
