import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Job.css';

function Job() {
  const [education, setEducation] = useState('');
  const [branch, setBranch] = useState('');
  const [stream, setStream] = useState('');
  const [sector, setSector] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Fetch matching job opportunities based on education level, stream, branch, and sector
    fetchMatchingJobs(education, stream, branch, sector)
      .then((data) => {
        // Navigate to the job opportunities page with the matching data
        navigate('/OpportunitiesJob', { state: { opportunities: data } });
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  const fetchMatchingJobs = async (educationLevel, stream, branch, sector) => {
    let url = '';

    // Set the URL based on the selected education level, stream, branch, and sector
    if (educationLevel === '10th') {
      if (sector === 'private') {
        url = 'http://localhost:3002/job_pri';
      } else {
        url = 'http://localhost:3002/job_govt';
      }
    } else if (educationLevel === 'inter') {
      if (stream === 'mpc') {
        url = 'http://localhost:3002/job_mpc';
      } else if (stream === 'bipc') {
        url = 'http://localhost:3002/job_bipc';
      }
    } else if (educationLevel === 'btech') {
      if (branch === 'cse') {
        url = 'http://localhost:3002/jobs_cse';
      } else if (branch === 'ece') {
        url = 'http://localhost:3002/jobs_ece';
      } else if (branch === 'civil') {
        url = 'http://localhost:3002/jobs_civil';
      }
    } else if (educationLevel === 'Degree') {
      if (sector === 'private') {
        url = 'http://localhost:3002/degpri_jobs';
      } else if (sector === 'government') {
        url = 'http://localhost:3002/deggov_jobs';
      }
    } else if (educationLevel === 'Mbbs') {
      url = 'http://localhost:3002/jobs_mbbs';
    }

    // Fetch data from the specified URL
    const response = await axios.get(url);
    return response.data;
  };

  return (
    <div className="job-background">
      <center>
        <header id="hello">
          <h1>HERPATH</h1>
        </header>

        <section>
          <div className="welcome-container">
            <div className="welcome-text">
              <h2>Job Opportunities</h2>
              <p>Provide your educational details and sector to see matching opportunities:</p>
              <form id="jobForm" onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255, 255, 255, 0)', padding: '20px', borderRadius: '10px' }}>
                <label htmlFor="education">Education:</label>
                <select id="education" value={education} required onChange={(e) => setEducation(e.target.value)}>
                  <option value="">Select...</option>
                  <option value="10th">10th</option>
                  <option value="inter">Intermediate</option>
                  <option value="btech">B.Tech</option>
                  <option value="Degree">Degree</option>
                  <option value="Mbbs">MBBS</option>
                </select>
                <br />
                {education === '10th' && (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ marginRight: '20px' }}>
                      <input type="radio" id="private_10" name="sector" value="private" onChange={(e) => setSector(e.target.value)} />
                      <label htmlFor="private_10">Private</label>
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                      <input type="radio" id="government_10" name="sector" value="government" onChange={(e) => setSector(e.target.value)} />
                      <label htmlFor="government_10">Government</label>
                    </div>
                  </div>
                )}
                {education === 'inter' && (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ marginRight: '20px' }}>
                      <input type="radio" id="mpc_inter" name="stream" value="mpc" onChange={(e) => setStream(e.target.value)} />
                      <label htmlFor="mpc_inter">MPC</label>
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                      <input type="radio" id="bipc_inter" name="stream" value="bipc" onChange={(e) => setStream(e.target.value)} />
                      <label htmlFor="bipc_inter">BIPC</label>
                    </div>
                  </div>
                )}

                {education === 'btech' && (
                  <div>
                    <label htmlFor="branch">Branch:</label>
                    <select id="branch" value={branch} required onChange={(e) => setBranch(e.target.value)}>
                      <option value="">Select...</option>
                      <option value="cse">Computer Science Engineering</option>
                      <option value="it">Information Technology</option>
                      <option value="eee">Electrical and Electronics Engineering</option>
                      <option value="ece">Electronics and Communication Engineering</option>
                      <option value="civil">Civil Engineering</option>
                      <option value="mech">Mechanical Engineering</option>
                    </select>
                    <br />
                  </div>
                )}
                {education === 'Degree' && (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ marginRight: '20px' }}>
                      <input type="radio" id="private_degree" name="sector" value="private" onChange={(e) => setSector(e.target.value)} />
                      <label htmlFor="private_degree">Private</label>
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                      <input type="radio" id="government_degree" name="sector" value="government" onChange={(e) => setSector(e.target.value)} />
                      <label htmlFor="government_degree">Government</label>
                    </div>
                  </div>
                )}

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </center>
    </div>
  );
}

export default Job;
