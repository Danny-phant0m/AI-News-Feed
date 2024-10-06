import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, CircularProgress } from '@mui/material';

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
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        {news.length === 0 ? (
          <CircularProgress />
        ) : (
          news.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                onClick={() => window.open(article.url, '_blank')} 
                style={{ cursor: 'pointer' }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {article.summary}
                  </Typography>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default NewsList;
