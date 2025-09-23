// components/UserProfile.js
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const UserProfile = () => {
  // Working with Query Parameters
  const [searchParams, setSearchParams] = useSearchParams();
  const action = searchParams.get('action');
  const editMode = searchParams.get('edit') === 'true';

  const enableEditMode = () => {
    // Update query parameters
    setSearchParams({ edit: 'true' });
  };

  const disableEditMode = () => {
    // Remove edit parameter
    setSearchParams({});
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      
      {/* Show message based on query parameter */}
      {action === 'quick_access' && (
        <div className="quick-access-message">
          You accessed this page through quick action!
        </div>
      )}

      {editMode ? (
        <div>
          <h3>Edit Mode</h3>
          <form>
            <input type="text" placeholder="Name" defaultValue="John Doe" />
            <input type="email" placeholder="Email" defaultValue="john@example.com" />
            <div className="form-actions">
              <button type="button" onClick={disableEditMode}>
                Cancel
              </button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john@example.com</p>
          <button onClick={enableEditMode}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;