import React, { useState } from 'react';

const Settings = () => {
  const [controls, setControls] = useState('steering');

  const handleControlChange = (e) => {
    setControls(e.target.value);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <label>
        Choose Controls:
        <select value={controls} onChange={handleControlChange}>
          <option value="steering">Steering</option>
          <option value="tilting">Tilting</option>
        </select>
      </label>
    </div>
  );
};

export default Settings;
