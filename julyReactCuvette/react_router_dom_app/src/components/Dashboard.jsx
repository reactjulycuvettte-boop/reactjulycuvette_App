import React from 'react';

const Dashboard = () => {
  return (
    <div className="page-container">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard! This is protected content.</p>
      <div className="dashboard-cards">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </div>
    </div>
  );
};

export default Dashboard;