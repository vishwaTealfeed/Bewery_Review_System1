// src/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import BreweryCard from './BreweryCard';
import logo1 from '../assets/logo1.png';
import user from '../assets/user.png';


function Dashboard() {
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("by_name");
  const [filteredBreweries, setFilteredBreweries] = useState([]);

  useEffect(() => {
    fetch('https://api.openbrewerydb.org/v1/breweries')
      .then(response => response.json())
      .then(data => setBreweries(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleSearch = () => {
    const results = breweries.filter(brewery => {
        if (filterType === "by_city") {
            fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${search}`)
              .then(response => response.json())
              .then(data => setFilteredBreweries(data))
              .catch(error => console.error('Error fetching data:', error));
              return brewery.brewery_city.toLowerCase().includes(search.toLowerCase());

      } else if (filterType === "by_name") {
        fetch(`https://api.openbrewerydb.org/v1/breweries?by_name=${search}`)
              .then(response => response.json())
              .then(data => setFilteredBreweries(data))
              .catch(error => console.error('Error fetching data:', error));
              return brewery.brewery_name.toLowerCase().includes(search.toLowerCase());
        
      } else if (filterType === "by_type") {
        fetch(`https://api.openbrewerydb.org/v1/breweries?by_type=${search}`)
              .then(response => response.json())
              .then(data => setFilteredBreweries(data))
              .catch(error => console.error('Error fetching data:', error));
        return brewery.brewery_type.toLowerCase().includes(search.toLowerCase());
      }
      return true;
    });
    setFilteredBreweries(results);
  };

  return (
    <>
   
         
        
  
    <div className="app-container">
   
      <div className="search-container">
      <img src={logo1} alt="Logo" className="navbar-logo" />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />
        <select value={filterType} onChange={handleFilterTypeChange}>
          <option value="by_name">By Name</option>
          <option value="by_city">By City</option>
          <option value="by_type">By Type</option>
        </select>
        <button className='btn' onClick={handleSearch}>Search</button>
      </div>
      <h2 className='navheading'>Welcome <span>User</span></h2>
     
    <img src={user} alt="Logo1" className="navbar-logo1" />
      <div className="brewery-list">
        {filteredBreweries.map(brewery => (
          <BreweryCard key={brewery.id} brewery={brewery} />
        ))}
      </div>
    </div>
    
    </>
  );
}

export default Dashboard;
