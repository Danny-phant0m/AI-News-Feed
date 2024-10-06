const express = require('express');
const { fetchAndSummarizeNews } = require('../controllers/newsController');

const router = express.Router();

router.get('/news', fetchAndSummarizeNews);

module.exports = router;
