import React from 'react';
import './App.css'; // Import your CSS file
import EmergencySetup from './EmergencySetup';
import EmergencyAction from './EmergencyAction';

const Home = () => {
  // Retrieve the stored emergency numbers from local storage
  const emergencyNumber1 = localStorage.getItem('emergencyNumber1') || '';
  const emergencyNumber2 = localStorage.getItem('emergencyNumber2') || '';
  const emergencyNumber3 = localStorage.getItem('emergencyNumber3') || '';
  const emergencyNumber4 = localStorage.getItem('emergencyNumber4') || '';

  return (
    <div className="home-container">

      {/* Help Line Numbers Section */}
      <div className="vertical-card">
        <h2 className="vertical-card-title">Help Line Numbers</h2>

        <div className="horizontal-cards-container">
          <a href="tel:+91112">
            <img src={require('./img/112.jpg')} alt="Police Emergency" />
            <p>Police Emergency</p>
          </a>
          <a href="tel:+911076">
            <img src={require('./img/1076.png')} alt="CM Help Line" />
            <p>CM Help Line</p>
          </a>
          <a href="tel:+91181">
            <img src={require('./img/181.jpg')} alt="Women Helpline" />
            <p>Women Helpline</p>
          </a>
          <a href="tel:+911090">
            <img src={require('./img/1090.png')} alt="Women Power Line" />
            <p>Women Power Line</p>
          </a>
          <a href="tel:+91108">
            <img src={require('./img/108.png')} alt="Ambulance Service" />
            <p>Ambulance Service</p>
          </a>
          <a href="tel:+91102">
            <img src={require('./img/102.jpg')} alt="Health Service" />
            <p>Health Service</p>
          </a>
        </div>
      </div>

      {/* Emergency Number Cards */}
      <div className="vertical-card">
        <h2 className="vertical-card-title">Help Me</h2>

        <div className="horizontal-cards-container">
          <a href={`tel:${emergencyNumber1}`}>
            <img src={require('./img/helpme.png')} alt="Emergency Number 1" />
            <p>{emergencyNumber1}</p>
          </a>
          <a href={`tel:${emergencyNumber2}`}>
            <img src={require('./img/help1.png')} alt="Emergency Number 2" />
            <p>{emergencyNumber2}</p>
          </a>
          <a href={`tel:${emergencyNumber3}`}>
            <img src={require('./img/help2.jpg')} alt="Emergency Number 3" />
            <p>{emergencyNumber3}</p>
          </a>
          <a href={`tel:${emergencyNumber4}`}>
            <img src={require('./img/help3.png')} alt="Emergency Number 4" />
            <p>{emergencyNumber4}</p>
          </a>
        </div>
      </div>
      {/* Emergency Number Cards */}
      <div className="vertical-card">
        <h2 className="vertical-card-title">Information Dashboard</h2>

        <div className="horizontal-cards-container">
        <a href="https://upmissionshakti.in/" target="_blank" >
            <img src={require('./img/logo1.jpg')} alt="" />
            <p>मिशन शक्ति</p>
          </a>
          <a href="https://www.wcso.in/Home/HomePage" target="_blank" >
            <img src={require('./img/logo2.png')} alt="" />
            <p>Women And Child Security Organisation</p>
          </a>
          <a href="https://mahilakalyan.up.nic.in/Default.aspx" target="_blank" >
            <img src={require('./img/logo3.jpg')} alt="" />
            <p>महिला एवं बाल विकास</p>
          </a>
          <a href="https://mksy.up.gov.in/women_welfare/index.php" target="_blank" >
            <img src={require('./img/logo4.jpg')} alt="" />
            <p>कन्या सुमंगला योजना</p>
          </a>
          <a href="https://sspy-up.gov.in/HindiPages/index_h.aspx" target="_blank" >
            <img src={require('./img/logo5.avif')} alt="" />
            <p>पेंशन पोर्टल</p>
          </a>
          
        </div>
      </div>

      {/* Emergency Setup Section */}
      <EmergencySetup />

      {/* Emergency Action Button */}
      <EmergencyAction />
      
      <div className='developer-info'>
        <h2>Developed by-Ajeet Agarwal</h2>
      </div>
    </div>
  );
};

export default Home;
