const { HfInference } = require('@huggingface/inference');
const axios = require('axios');

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// Fetch and summarize news
const fetchAndSummarizeNews = async (req, res) => {
    try {
        const newsResponse = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
        const articles = newsResponse.data.articles;
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching or summarizing news');
    }
};

module.exports = { fetchAndSummarizeNews };
