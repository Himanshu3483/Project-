import React, { useState } from 'react';

const HealthTracker = () => {
  const [healthData, setHealthData] = useState([]);
  const [newData, setNewData] = useState({ temperature: '', bloodPressure: '', weight: '' });

  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHealthData([...healthData, { ...newData, date: new Date().toLocaleString() }]);
    setNewData({ temperature: '', bloodPressure: '', weight: '' });
  };

  return (
    <div className="page-container">
      <h1>Health Tracker</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="temperature">Temperature (°F)</label>
          <input
            type="number"
            id="temperature"
            name="temperature"
            value={newData.temperature}
            onChange={handleInputChange}
            placeholder="e.g., 98.6"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bloodPressure">Blood Pressure</label>
          <input
            type="text"
            id="bloodPressure"
            name="bloodPressure"
            value={newData.bloodPressure}
            onChange={handleInputChange}
            placeholder="e.g., 120/80"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (lbs)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={newData.weight}
            onChange={handleInputChange}
            placeholder="e.g., 150"
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="btn">Log Data</button>
      </form>

      {healthData.length > 0 && (
        <div className="health-data">
          <h2>Health Log</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Temperature (°F)</th>
                <th>Blood Pressure</th>
                <th>Weight (lbs)</th>
              </tr>
            </thead>
            <tbody>
              {healthData.map((data, index) => (
                <tr key={index}>
                  <td>{data.date}</td>
                  <td>{data.temperature}</td>
                  <td>{data.bloodPressure}</td>
                  <td>{data.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HealthTracker;
