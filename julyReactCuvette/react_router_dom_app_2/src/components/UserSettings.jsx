// components/UserSettings.js
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const UserSettings = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'general';

  const tabs = ['general', 'privacy', 'notifications'];

  return (
    <div className="user-settings">
      <h2>User Settings</h2>
      
      {/* Show active tab from query parameters */}
      {searchParams.get('tab') && (
        <div className="tab-message">
          Active tab: {activeTab} (set via query parameter)
        </div>
      )}

      <div className="settings-tabs">
        {tabs.map(tab => (
          <div 
            key={tab} 
            className={`tab ${activeTab === tab ? 'active' : ''}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      <div className="settings-content">
        {activeTab === 'general' && (
          <div>
            <h3>General Settings</h3>
            <p>Manage your general account settings here.</p>
          </div>
        )}
        {activeTab === 'privacy' && (
          <div>
            <h3>Privacy Settings</h3>
            <p>Control your privacy preferences.</p>
          </div>
        )}
        {activeTab === 'notifications' && (
          <div>
            <h3>Notification Settings</h3>
            <p>Configure how you receive notifications.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSettings;