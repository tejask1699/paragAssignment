import React from 'react';
import '../App.js'
const CategorySidebar = ({ categories, onCategorySelect, sidebarOpen, toggleSidebar}) => {
  
  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
      
      <button className="toggle-btn" onClick={toggleSidebar}>&#9776;</button>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <a href="#" onClick={() => onCategorySelect(category)}>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
