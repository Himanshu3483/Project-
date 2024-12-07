import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    email: 'user@example.com',
    username: 'exampleUser',
    name: 'John Doe',
    bio: 'I love using this app!',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated profile to your backend
    console.log('Updated profile:', profile);
    setIsEditing(false);
  };

  return (
    <div className="page-container">
      <h1>User Profile</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={profile.username}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              rows="4"
              className="input-field"
            ></textarea>
          </div>
          <button type="submit" className="btn">Save Changes</button>
          <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div className="profile-info">
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Username:</strong> {profile.username}</p>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
          <button className="btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
