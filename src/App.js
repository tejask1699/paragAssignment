import React, { useEffect, useState } from 'react';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import Sidebar from './components/Sidebar';
import './App.css';


const App = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [activeCategory, setActiveCategory] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const[news,setNews] = useState([])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const getData = () =>{
    let url = "https://newsdata.io/api/1/news?apikey=pub_635031f8dfedfcd1866ea8b447113b762127f&language=en&category=technology"
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      setNews(data)
    })
    .catch(e => console.log(e.message));
  }
  useEffect(()=>{
    getData();
  },[])
console.log(news)
  const newsData = [
    { id: 1, title: 'Politics: Global Summit Discusses Future of Economy', category: 'Politics', summary: 'At the recent global summit...', content: 'Full article content for politics news...' },
    { id: 2, title: 'Sports: Local Team Wins Championship', category: 'Sports', summary: 'In an exciting final, the local team...', content: 'Full article content for sports news...' },
    { id: 3, title: 'Technology: New AI Innovations Unveiled', category: 'Technology', summary: 'Tech enthusiasts gathered to witness...', content: 'Full article content for technology news...' },
    { id: 4, title: 'Entertainment: Movie Premiere Breaks Box Office Records', category: 'Entertainment', summary: 'The premiere of a much-anticipated movie...', content: 'Full article content for entertainment news...' },
  ];

  const filteredNews = activeCategory
    ? newsData.filter(news => news.category === activeCategory)
    : newsData;

  return (
    <div className="app">
      <Sidebar 
        categories={['Business','General', 'Sports','Health', 'Technology', 'Entertainment',]} 
        onCategorySelect={setActiveCategory} 
        sidebarOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar}
      />
      <div className="main-content">
        <NewsList news={filteredNews} onNewsSelect={setSelectedNews} />
        {selectedNews && <NewsDetail news={selectedNews} />}
      </div>
    </div>
  );
};

export default App;

