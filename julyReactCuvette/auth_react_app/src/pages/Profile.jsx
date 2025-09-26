import React, { useState, useCallback, memo } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = memo(() => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  const toggleEdit = useCallback(() => {
    setIsEditing(prev => !prev);
  }, []);

  const handleSave = useCallback(() => {
    console.log('Saving profile:', formData);
    setIsEditing(false);
  }, [formData]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      
      <div>
        {isEditing ? (
          <>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}              />
            </div>
            <div>
              <button
                onClick={handleSave}
              >
                Save
              </button>
              <button
                onClick={toggleEdit}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p ><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <button
              onClick={toggleEdit}
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
});


export default Profile;