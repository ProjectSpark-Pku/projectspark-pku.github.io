import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/under_construction.css';

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="uc-container">
      <div className="uc-card">
        <div className="uc-icon">🚧</div>
        <h1 className="uc-title">Under Construction</h1>
        <p className="uc-description">
          We're working hard to bring you something amazing. This page is currently being built and will be available soon.
        </p>
        <button className="uc-back-button" onClick={() => navigate(-1)}>
          <span>&larr;</span> Go Back
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
