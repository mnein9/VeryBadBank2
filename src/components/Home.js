// src/components/Home.js
import React from 'react';
import bankImage from '../assets/badbank2.png';

const Home = () => {
  return (
    <div className="card my-5">
      <img src={bankImage} className="card-img-top" alt="Bank" />
      <div className="card-body">
        <h5 className="card-title text-center font-weight-bold">Welcome to Very Bad Bank</h5>
        <p className="card-text text-center">
          Where we promise to be surprisingly good at handling your finances. Our name might be bad, but our services are top-notch! Join us for a banking experience that's so good, it's almost criminal.
        </p>
      </div>
    </div>
  );
};

export default Home;
