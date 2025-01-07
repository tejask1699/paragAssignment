import React from 'react';
import NewsItem from './NewsItem';
import '../App.js'


const NewsList = ({ news, onNewsSelect }) => {
  return (
    <div className="news-list">
      <h1>Latest News</h1>
      {news.map((newsItem) => (
        <NewsItem key={newsItem.id} news={newsItem} onClick={onNewsSelect} />
      ))}
    </div>
  );
};

export default NewsList;
