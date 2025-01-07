import React from 'react';
import '../App.js'

const NewsDetail = ({ news }) => {
  return (
    <div className="news-detail">
      <h2>{news.title}</h2>
      <p>{news.content}</p>
    </div>
  );
};

export default NewsDetail;
