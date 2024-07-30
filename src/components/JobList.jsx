import React, { useState } from 'react';
import JobCard from './JobCard';
import SearchBar from './SearchBar';
import jobsData from '../jobData/db.json';

const JobList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobsData.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  
  );

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Job Title</th>
            <th>Company Name</th>
            <th>Location</th>
            <th>Experience</th>
            <th>Position</th>
            <th>Type</th>
            <th>Posted Date</th>
            <th>Last Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;
