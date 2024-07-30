import React from 'react';

const JobCard = ({ job, index }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'New':
        return 'status-new';
      case 'Close':
        return 'status-close';
      default:
        return '';
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{job.jobTitle}</td>
      <td>{job.companyName}</td>
      <td>{job.location}</td>
      <td>{job.experience}</td>
      <td>{job.position}</td>
      <td>{job.type}</td>
      <td>{job.postedDate}</td>
      <td>{job.lastDate}</td>
      <td className={getStatusClass(job.status)}>{job.status}</td>
    </tr>
  );
};

export default JobCard;
