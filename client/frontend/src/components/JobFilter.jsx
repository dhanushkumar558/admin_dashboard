import React from 'react';
import './JobFilter.css';

const JobFilter = ({
  searchQuery, setSearchQuery,
  selectedLocation, setSelectedLocation,
  selectedType, setSelectedType,
  selectedSalary, setSelectedSalary
}) => {
  return (
    <div className="filter-container bg-white rounded px-8 py-3">
      
      {/* 🔍 Search */}
      <div className="filter-group">
        <svg width="20" height="20" viewBox="0 0 20 20" className="filter-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 13L19 19M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z" stroke="#686868" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search By Job Title, Role"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="vertical-divider"></div>

      {/* 📍 Location */}
      <div className="filter-group">
        <svg width="18" height="23" viewBox="0 0 18 23" className="filter-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.7808 19.7005L11.1906 19.2377..." fill="#686868" />
        </svg>
        <select className="location-select" value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
          <option value="">Preferred Location</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>

      <div className="vertical-divider"></div>

      {/* 🧾 Job Type */}
      <div className="filter-group">
        <span className="filter-icon">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 17C13 14.7909 10.3137..." stroke="#686868" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <select className="type-select" value={selectedType} onChange={e => setSelectedType(e.target.value)}>
          <option value="">Job Type</option>
          <option value="FullTime">FullTime</option>
          <option value="Internship">Internship</option>
          <option value="PartTime">PartTime</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <div className="vertical-divider"></div>

      {/* 💰 Salary */}
      <div className="salary-section">
        <div className="salary-top-row">
          <label className="salary-label">Salary Per Month</label>
          <span className="salary-display">₹10k - ₹{(selectedSalary / 1000).toFixed(0)}k</span>
        </div>
        <div className="slider-track">
          <div className="dot start"></div>
          <div className="line"></div>
          <div
            className="dot end"
            style={{ left: `${((selectedSalary - 10000) / (200000 - 10000)) * 100}%` }}
          ></div>
          <input
            type="range"
            min={10000}
            max={200000}
            step={5000}
            value={selectedSalary}
            onChange={e => setSelectedSalary(Number(e.target.value))}
            className="salary-range real-range"
          />
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
