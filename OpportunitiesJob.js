// OpportunitiesJob.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Opportunities.css'; // Import the CSS file

function OpportunitiesJob() {
  const location = useLocation();
  const { opportunities } = location.state || { opportunities: [] };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div>
      <center>
        <header>
          <h1>Matching Job Opportunities</h1>
        </header>

        <section>
          {opportunities.length > 0 ? (
            <table className="opportunities-table">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Description</th>
                  <th>Additional_info</th>
                </tr>
              </thead>
              <tbody>
                {opportunities.map((opportunity, index) => (
                  <tr key={index}>
                    <td>{opportunity['Job Title']}</td>
                    <td>{opportunity.Description}</td>
                   
                 <td><a>{opportunity.Additional_info}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No matching job opportunities found.</p>
          )}
        </section>
      </center>
    </div>
  );
}

export default OpportunitiesJob;