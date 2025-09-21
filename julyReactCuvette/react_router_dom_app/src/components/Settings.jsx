import React from 'react';

const Settings = () => {
  return (
    <div className="page-container">
      <h2>Settings</h2>
      <div className="settings-section">
        <h3>Account Settings</h3>
        <div className="setting-item">
          <label>Notification Preferences</label>
          <select>
            <option>Email</option>
            <option>Push</option>
            <option>Both</option>
          </select>
        </div>
        <div className="setting-item">
          <label>Privacy</label>
          <select>
            <option>Public</option>
            <option>Friends Only</option>
            <option>Private</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;