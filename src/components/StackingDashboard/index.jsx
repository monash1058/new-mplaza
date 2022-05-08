import React from 'react';
import './style.css';

export default function StackingDashboard() {
  return (
    <div>
      <div className='stacking-dashboard'>
        <h2 className="head gradient-heading">Stacking Dashboard</h2>
        <p>Get the most out of your assets with up to 800% fixed APY!</p>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <p>7 Days</p>
          <p>150% APY</p>
          <p>20% Early Withdraw fees</p>
          <h4>Start Staking Today</h4>
        </div>
        <div className="dashboard-card">
          <p>15 Days</p>
          <p>300% APY</p>
          <p>20% Early Withdraw fees</p>
          <h4>Start Staking Today</h4>
        </div>
        <div className="dashboard-card">
          <p>30 Days</p>
          <p>600% APY</p>
          <p>20% Early Withdraw fees</p>
          <h4>Start Staking Today</h4>
        </div>
        <div className="dashboard-card">
          <p>90 Days</p>
          <p>800% APY</p>
          <p>20% Early Withdraw fees</p>
          <h4>Start Staking Today</h4>
        </div>
      </div>
    </div>
  )
}
