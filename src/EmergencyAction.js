import React from 'react';

const EmergencyAction = ({ numberIndex }) => {
  const sendEmergencyMessage = () => {
    const emergencyNumber = localStorage.getItem(`emergencyNumber${numberIndex}`);

    if (!emergencyNumber) {
      alert(`Please save an emergency number ${numberIndex} first.`);
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const message = `Help! My location is: https://www.google.com/maps?q=${latitude},${longitude}`;

        // Send SMS
        window.location.href = `sms:${emergencyNumber}?body=${encodeURIComponent(message)}`;

        // Trigger phone call
        window.location.href = `tel:${emergencyNumber}`;
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <button onClick={sendEmergencyMessage}>
      Danger / Help Me
    </button>
  );
};

export default EmergencyAction;
