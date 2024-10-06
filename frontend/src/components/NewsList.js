import React, { useEffect, useState } from 'react';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news  backend
    const fetchNews = async () => {
      const response = await fetch('http://localhost:3000/news');
      if (!response.ok) {
        throw new Error('Network response was not ok');
    }
      const data = await response.json();
      setNews(data);
      console.log(data)
    };
    
    fetchNews();
  }, []);

  return (
    <div className="news-container">
      {news.length === 0 ? (
        <p>Loading news...</p>
      ) : (
        news.map((article, index) => (
          <a 
            key={index} 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="news-article-link"
          >
            <div className="news-article">
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
            </div>
          </a>
        ))
      )}
    </div>
  );
};

export default NewsList;
