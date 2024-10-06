import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const NewsArticleCard = ({ title, summary, link }) => {
  return (
    <Card 
      variant="outlined" 
      style={{ margin: '10px', cursor: 'pointer', backgroundColor: '#f5f5f5' }} 
      onClick={() => window.open(link, '_blank')} // Open article link in a new tab
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsArticleCard;
