import React, { useState } from 'react';

const EmergencySetup = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');

  const saveNumbers = () => {
    localStorage.setItem('emergencyNumber1', number1);
    localStorage.setItem('emergencyNumber2', number2);
    localStorage.setItem('emergencyNumber3', number3);
    localStorage.setItem('emergencyNumber4', number4);
    alert('Emergency numbers saved!');
  };

  return (
    <div>
      <h3>Setup Emergency Numbers</h3>
      <input 
        type="text" 
        placeholder="Enter Emergency Number 1" 
        value={number1} 
        onChange={(e) => setNumber1(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Enter Emergency Number 2" 
        value={number2} 
        onChange={(e) => setNumber2(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Enter Emergency Number 3" 
        value={number3} 
        onChange={(e) => setNumber3(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Enter Emergency Number 4" 
        value={number4} 
        onChange={(e) => setNumber4(e.target.value)} 
      />
      <button onClick={saveNumbers}>Save Numbers</button>
    </div>
  );
};

export default EmergencySetup;
