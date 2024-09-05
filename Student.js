import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Student.css';

function Student() {
  const [educationLevel, setEducationLevel] = useState('');
  const [matchingOpportunities, setMatchingOpportunities] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Fetch matching opportunities based on education level
    fetchMatchingOpportunities(educationLevel)
      .then((data) => {
        setMatchingOpportunities(data);
        // Navigate to the opportunities page with the matching data
        navigate('/opportunities', { state: { opportunities: data } });
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  const fetchMatchingOpportunities = async (educationLevel) => {
    let url = '';

    // Set the URL based on the selected education level
    if (educationLevel === '10th') {
      url = 'http://localhost:3002/opport_10';
    } else if (educationLevel === '12th') {
      url = 'http://localhost:3002/opport_12';
    }else if (educationLevel === 'diploma') {
      url = 'http://localhost:3002/opport_poly';
    }else if (educationLevel === 'undergraduate') {
      url = 'http://localhost:3002/opport_ug';
    }else if (educationLevel === 'postgraduate') {
      url = 'http://localhost:3002/opport_pg';
    }

    // Fetch data from the specified URL
    const response = await axios.get(url);
    return response.data;
  };



  return (
    <div>
      <center>
      <header id="hello">
          <h1>HERPATH</h1>
        </header>

        <section>
          <div className="welcome-container">
            <div className="welcome-text">
              <h2>Student Opportunities</h2>
              <p>Provide your educational details to see matching opportunities:</p>

              <form onSubmit={handleSubmit}>
                <label htmlFor="educationLevel">Education Level:</label>
                <select
                  id="educationLevel"
                  value={educationLevel}
                  onChange={(e) => setEducationLevel(e.target.value)}
                  required
                >
                  <option value="">Select...</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="diploma">Diploma</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                </select>
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </center>
    </div>
  );
}

export default Student;
