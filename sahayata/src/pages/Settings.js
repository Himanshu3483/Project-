import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    language: 'en',
    theme: 'light',
    notifications: {
      email: true,
      push: false,
      sms: false
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setSettings(prevSettings => ({
        ...prevSettings,
        notifications: {
          ...prevSettings.notifications,
          [name]: checked
        }
      }));
    } else {
      setSettings(prevSettings => ({
        ...prevSettings,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated settings to your backend
    console.log('Updated settings:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="page-container">
      <h1>Settings</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select
            id="language"
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="input-field"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="theme">Theme</label>
          <select
            id="theme"
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="input-field"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="form-group">
          <h3>Notification Preferences</h3>
          <label>
            <input
              type="checkbox"
              name="email"
              checked={settings.notifications.email}
              onChange={handleChange}
              className="input-checkbox"
            />
            Receive email notifications
          </label>
          <label>
            <input
              type="checkbox"
              name="push"
              checked={settings.notifications.push}
              onChange={handleChange}
              className="input-checkbox"
            />
            Receive push notifications
          </label>
          <label>
            <input
              type="checkbox"
              name="sms"
              checked={settings.notifications.sms}
              onChange={handleChange}
              className="input-checkbox"
            />
            Receive SMS notifications
          </label>
        </div>
        <button type="submit" className="btn">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
