// src/components/Withdraw.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Withdraw = () => {
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [currentBalance, setCurrentBalance] = useState(1000.00);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      setCurrentUserEmail(email);
      getCurrentBalance(email);
    }
  }, []);

  const getCurrentBalance = (email) => {
    axios.get('http://backend-dev2.us-east-1.elasticbeanstalk.com/get_balance', { params: { email } })
      .then(response => setCurrentBalance(response.data.balance))
      .catch(error => console.log(error));
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount)) {
      alert('Please enter a valid number for the withdrawal amount.');
      return;
    }
    if (amount < 0) {
      alert('Please enter a positive withdrawal amount.');
      return;
    }
    if (amount > currentBalance) {
      alert('Insufficient funds. Please enter a smaller withdrawal amount.');
      return;
    }
    axios.post('http://backend-dev2.us-east-1.elasticbeanstalk.com/withdraw', { email: currentUserEmail, amount })
      .then(() => {
        setCurrentBalance(prevBalance => prevBalance - amount);
        setShowSuccessMessage(true);
        setWithdrawAmount('');
      })
      .catch(error => {
        console.log(error);
        alert('Error processing withdrawal.');
      });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Withdraw Funds</h5>
          <div className="mb-3 text-center">
            <p className="card-text">Current Balance: ${currentBalance.toFixed(2)}</p>
          </div>
          <form id="withdrawForm" onSubmit={handleWithdraw}>
            <div className="mb-3">
              <label htmlFor="withdrawInput" className="form-label">Withdraw Amount</label>
              <input
                type="text"
                className="form-control"
                id="withdrawInput"
                placeholder="Enter withdrawal amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary" id="withdrawButton" disabled={!withdrawAmount.trim()}>Withdraw</button>
            </div>
          </form>
          <div className="alert alert-success mt-3" id="successMessage" style={{ display: showSuccessMessage ? 'block' : 'none' }}>
            Withdrawal successful!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
