const { HfInference } = require('@huggingface/inference');
const axios = require('axios');

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// Fetch and summarize news
const fetchAndSummarizeNews = async (req, res) => {
    try {
        const newsResponse = await axios.get(`https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.NEWS_API_KEY}`);
        const articles = newsResponse.data.articles;
        const summaries = await Promise.all(articles.map(async (article) => {
            const summaryResponse = await hf.summarization({
                model: 'facebook/bart-large-cnn',
                inputs: `${article.title}. ${article.description}`,
            });
            return { 
                title: article.title, 
                summary: summaryResponse.summary_text, 
                url: article.url, 
                category: article.category 
            };
        }));

        res.json(summaries);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching or summarizing news');
    }
};

module.exports = { fetchAndSummarizeNews };
