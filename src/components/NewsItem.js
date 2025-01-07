import React from 'react';
import '../App.js'

const NewsItem = ({ news, onClick }) => {
  return (
    <div className="news-item" onClick={() => onClick(news)}>
      <h3>{news.title}</h3>
      <p>{news.summary}</p>
    </div>
  );
};

export default NewsItem;
