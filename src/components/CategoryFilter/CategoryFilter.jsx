import React from 'react';
import './CategoryFilter.css'; // Import the category.css file

function CategoryFilter({ categories, selectedCategory, onChange }) {
  return (
    <div className="category-filter">
      <label htmlFor="category-select">Filter by Category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;