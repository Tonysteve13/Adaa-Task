// SearchBar.tsx
import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="search-bar-container">
      <input type="text" value={keyword} onChange={handleInputChange} placeholder="Enter search term" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
