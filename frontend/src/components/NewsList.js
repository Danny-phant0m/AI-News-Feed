import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, } from '@mui/material';
import '../styles/NewsList.css';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('http://localhost:5000/news');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setNews(data);
      console.log(data);
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      {news.length === 0 ? (
        <Typography variant="h6">Loading news...</Typography>
      ) : (
        news.map((article, index) => (
          <Card key={index} className="news-article" variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2" color="primary">
                {article.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {article.summary}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default NewsList;
