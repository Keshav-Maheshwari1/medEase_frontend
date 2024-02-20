import React from 'react'
import logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../User';
export const Video = () => {
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
    <div>
      <nav className='nav-items'>
        <Link className='nav-group-logo' tag='a' to='/'>
          <img src={logo} className='nav-website-logo' alt='logo'/>
        </Link>
        <div className='nav-links'>
          <span className='nav-group-item' onClick={handleVideoClick}><span className='inside-labtest'>Video Consult</span></span>
          <span className='nav-group-item' onClick={handleDoctorClick}>Find Doctors</span>
          <span className='nav-group-item' onClick={handleEducationClick}>Education</span>
          <span className='nav-group-item' onClick={handleLabTestClick}>Lab Test</span>
        </div>
        <p className='nav-login-button' onClick={handleUserLogin}>
          {displayUser.username}
        </p>
      </nav>
      <hr/>
      <div className="video-logo-container">
        <div className="video-search">
          <label htmlFor="location"></label>
          <select id="location" className='video-search-location' name="dropdownSize" >
            <option value="">Search any location</option>
            <option value="1">Bhopal 🤽</option>
            <option value="2">Mumbai 🏫</option>
            <option value="3">Delhi ✈️</option>
            <option value="4">Banglore 💴</option>
          </select>
          <label htmlFor="main-search-test"></label>
          <select id="main-search-test" name="dropdownSize" >
            <option value="">Search for any Services</option>
            <option value="1">Liver Test</option>
            <option value="2">Blood Test</option>
            <option value="3">Cholestrol Test</option>
            <option value="4">Urine Test</option>
          </select>
          
        </div>
        <img src={logo} alt="" className='video-chat-logo'/>
      </div>
      <footer className='lastcontainer'>
      </footer>
      </div>
  )
}
