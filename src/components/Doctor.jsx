import React from 'react'
import logo from '../images/logo.png'
import fever from '../images/fever.jpeg'
import diabetes from '../images/diabetes.jpg'
import skin from '../images/skin.jpg'
import kidney from '../images/kidney.jpeg'
import digestion from '../images/digestion.jpg'
import cancer from '../images/cancer.jpeg'
import findDoctors from '../images/findDoctors.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../User'


export const Doctor = () => {
  const {displayUser} = useUserContext();
  const navigate = useNavigate();
  const handleUserLogin =()=>{
    navigate('/Login');
  }
  const handleVideoClick = ()=>{
    navigate('/Video');
  }
  const handleEducationClick = ()=>{
    navigate('/Education');
  }
  const handleDoctorClick = ()=>{
    navigate('/Doctor');
  }
  const handleLabTestClick = ()=>{
    navigate('/LabTest');
  }
  return (
    <div className='labtest-main'>
    <nav className='nav-items'>
      <Link className='nav-group-logo' tag='a' to='/'>
        <img src={logo} className='nav-website-logo' alt='logo'/>
      </Link>
      <div className='nav-links'>
        <span className='nav-group-item' onClick={handleVideoClick}>Video Consult</span>
        <span className='nav-group-item' onClick={handleDoctorClick}><span className='inside-labtest'>Find Doctors</span></span>
        <span className='nav-group-item' onClick={handleEducationClick}>Education</span>
        <span className='nav-group-item' onClick={handleLabTestClick}>Lab Test</span>
      </div>
      <p className='nav-login-button' onClick={handleUserLogin}>
        {displayUser.username}
      </p>
    </nav>
    <hr/>
    <div className="main-search">
      <label htmlFor="location"></label>
      <select id="location" name="dropdownSize" >
        <option value="">Search any location</option>
        <option value="1">Bhopal 🤽</option>
        <option value="2">Mumbai 🏫</option>
        <option value="3">Delhi ✈️</option>
        <option value="4">Banglore 💴</option>
      </select>
      <label htmlFor="main-search-test"></label>
      <select id="main-search-test" name="dropdownSize" >
        <option value="">Search Doctor,Clinic,Hospitals</option>
        <option value="1">Liver Test</option>
        <option value="2">Blood Test</option>
        <option value="3">Cholestrol Test</option>
        <option value="4">Urine Test</option>
      </select>
    </div>
    <div className="labtest-front">
      <div className="main-content">
        <h1 className='main-content-heading'>Your data's protection is at the heart of everything we do.</h1>
        <p className='main-content-detail'>Multiple Security Checks</p>
        <p className='main-content-detail'>Records Are accesible only By you</p>
        <p className='main-content-detail'>Access your past sessions whenever you need, effortlessly.</p>
        
      </div>
      <div className="labTech">
        <img src={findDoctors} alt="" />
      </div>
    </div>
    <h1 className='labtest-headline'>Explore Qualified Healthcare Providers for Your Needs</h1>
    <div className="test-cards">
      <div className="test-cards-card">
        <img src={digestion} alt="" />
        <h3>Digestion</h3>
      </div>
      <div className="test-cards-card">
        <img src={fever} alt="" />
        <h3>Fever</h3>
      </div>
      <div className="test-cards-card">
        <img src={diabetes} alt="" />
        <h3>Diabetes</h3>
      </div>
      <div className="test-cards-card">
        <img src={skin} alt="" />
        <h3>Skin</h3>
      </div>
      <div className="test-cards-card">
        <img src={kidney} alt="" />
        <h3>Kidney</h3>
      </div>
      <div className="test-cards-card">
        <img src={cancer} alt="" />
        <h3>Cancer</h3>
      </div>
    </div>
    <div className="labtest-trust">
      <h1>Why Trust Us?</h1>
      <div className="labtest-trust-head">
        <div className="labtest-trust-head1">
          <h3>Home Sample Collection For Free</h3>
          <p>A certified professional will collect your sample from your preferred location</p>
        </div>
        <div className="labtest-trust-head1">
          <h3>Get digital report within a day</h3>
          <p>Our labs ensure turn-around-time of 24 hours from specimen pickup</p>
        </div>
      </div>
    </div>
    
    <footer className='lastcontainer'>
    </footer>
  </div>

  )
}
