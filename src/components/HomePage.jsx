import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import logo from '../images/logo.png'
import videoimage from '../images/videoimage.jpg'
import doctor from '../images/doctor.jpg'
import labtest from '../images/labtest.jpg'
import education from '../images/education.jpg'
import ayurveda from '../images/ayurveda.jpg'
import awareness from '../images/awareness.jpg'
import news from '../images/news.jpg'
import news2 from '../images/news2.jpg'
import { useUserContext } from '../User'



export const HomePage = () => {
  const { displayUser } = useUserContext();
  const navigate = useNavigate();

  const handleShortsButtonClick = () => {
    navigate('./Shorts')
  }
  const handleArticleButtonClick = () => {
    navigate('./Article');
  }
  const handleUserLogin =()=>{
    
    if(displayUser.username === "Register/Login"){
      navigate('/Register');
    }
    else{
      navigate('/patient')
    }
  }

  return (
    <>
      <nav className='nav-items'>
          <Link className='nav-group-logo' tag='a' to='/'><img src={logo} className='nav-website-logo' alt='logo'/></Link>
          <div className='nav-links'>
            <Link className='nav-group-item' tag = 'a' to='video'>Video Consult</Link>
            <Link className='nav-group-item' tag='a' to='doctor'>Find Doctors</Link>
            <Link className='nav-group-item' tag='a' to='education'>Education</Link>
            <Link className='nav-group-item' tag='a' to='LabTest'>Lab Test</Link>
          </div>
          <p className='nav-login-button' onClick={handleUserLogin}>
            {displayUser.username}
          </p>
      </nav>
      <hr/>
      <div className="main">
        <div className="main-content">
          <h1 className='main-content-heading'>Your Wellness, Everywhere: We've Got You Covered! 🌍</h1>
          <p className='main-content-detail'>Discover the future of healthcare with our user-friendly telemedicine platform. Access top-notch medical expertise from the comfort of your home, and empower yourself further with our comprehensive courses designed to enhance your health knowledge. Your well-being, simplified and within reach.</p>
        </div>
          <div className="tilted-container"/>
      </div>
      <div className="services">
        <Link className='services-link' tag='a' to='/video'>
          <div className="services-card">
            <img src={videoimage} alt='videoConsult' className='services-image'/>
            <h2 className='card-heading'>Instant Video Consultation</h2>
            <p className='card-text'>Withing quick time</p>
          </div>
        </Link>
        <Link className='services-link' tag='a' to='/doctor'>
          <div className="services-card">
            <img src={doctor} alt='doctor' className='services-image'/>
            <h2 className='card-heading'>Find Doctors Near You</h2>
            <p className='card-text'>Confirmed Appointments</p>
          </div>
        </Link>
        <Link className='services-link' tag='a' to='/education'>
          <div className="services-card">
            <img src={education} alt='education' className='services-image'/>
            <h2 className='card-heading'>AyuLearn: Wellness Wisdom</h2>
            <p className='card-text'>Explore Courses Today.</p>
          </div>
        </Link>
        <Link className='services-link' tag='a' to='/labtest'>
          <div className="services-card">
            <img src={labtest} alt='labtest' className='services-image'/>
            <h2 className='card-heading'>Lab Tests</h2>
            <p className='card-text'>Sample pickup at your home</p>
          </div>
        </Link>
      </div>
      <hr/>
      <div className="shorts-container">
        <div className="shorts-container-content">
          <h1>#Shorts</h1>
          <h2>Discover Quick Tips for a Healthier You</h2>
          <p>Your go-to destination for quick, actionable health tips to boost your well-being effortlessly</p>
          <button onClick={handleShortsButtonClick} className="container-button">Explore more</button>
        </div>
        <div className="shorts-cards">
          <div className="shorts-cards-card">
            <img src={ayurveda} alt="ayurveda"/>
          </div>
          <div className="shorts-cards-card">
            <img src={awareness} alt="awareness" />
          </div>
        </div>
        
      </div>
      <hr/>
      <div className="shorts-container">
        <div className="shorts-container-content">
          <h1>#Articles</h1>
          <h2>Read top articles from health experts</h2>
          <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
          <button onClick={handleArticleButtonClick} className="container-button">See all articles</button>
        </div>
        <div className="shorts-cards">
          <div className="shorts-cards-card">
            <img src={news} alt="news"/>
          </div>
          <div className="shorts-cards-card">
            <img src={news2} alt="news2" />
          </div>
        </div>
      </div>
      <footer className='lastcontainer'>

      </footer>
    </>
  )
}
