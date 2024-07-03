// src/components/AllData.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllData = () => {
  const [userSubmissions, setUserSubmissions] = useState([]);

  useEffect(() => {
    fetch('http://backend-dev2.us-east-1.elasticbeanstalk.com/get_logins')
      .then(response => response.json())
      .then(data => setUserSubmissions(data))
      .catch(error => console.error('Failed to retrieve user submissions:', error));
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">All Data</h5>
          <div className="mb-3 text-center">
            <p className="card-text">User Submissions:</p>
            <ul id="userSubmissions" className="list-group">
              {userSubmissions.map((user, index) => (
                <li key={index} className="list-group-item">
                  Email: {user.email}, Username: {user.username}, Password: {user.password}, Date: {new Date(user.loginDate).toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllData;
