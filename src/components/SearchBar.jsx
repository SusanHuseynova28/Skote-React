import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="filters space-x-4 ">
      <select className="search-bar p-2  rounded-lg bg-[#2a3042] text-white">
        <option>Show 10</option>
        <option>Show 20</option>
        <option>Show 30</option>
        <option>Show 40</option>
        <option>Show 50</option>
        
      </select>
      <input
        type="text"
        placeholder="Search for ..."
        className="search-bar p-2  rounded-lg bg-[#2a3042] text-white"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select className="search-bar p-2   rounded-lg bg-[#2a3042] text-white outline-none">
        <option>Status</option>
        <option>All</option>
        <option>Active</option>
        <option>Close</option>
        <option>New</option>


        
      </select>
      <select className="search-bar p-2  border-[#2a3042] rounded-lg bg-[#2a3042] text-white">
        <option>Select Type</option>
        <option>All</option>
        <option>Full Time</option>
        <option>Part Time</option>
        
      </select>
     
    </div>
  );
};

export default SearchBar;
