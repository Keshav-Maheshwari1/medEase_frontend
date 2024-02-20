import React, { useState } from 'react'
import { useNavigate,Link} from 'react-router-dom';
import logo from '../images/logo.png'
import {url} from '../springboot.js';
import axios from 'axios';
import { useUserContext } from '../User.js'
import { toast } from 'react-toastify';
export const Register = () => {
  const { setDisplayUser } = useUserContext();
  const[showPassword,setShowPassword] = useState(false);
  const[userDetails,setUserDetails] = useState({
    username: '',
    userEmail: '',
    password: ''
  }) 
  const navigate = useNavigate()
  const handleUserRegister = async (event) => {
    event.preventDefault();  
  
    if (userDetails.username !== '' && userDetails.userEmail !== '' && userDetails.password !== '') {
      try{
        const response = await axios.post(url+"/Register", userDetails, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 200) {
          console.log(response.data);
          const registeredUsername = response.data.username;
          setDisplayUser({
            username: registeredUsername,
            id: response.data.id
          });
          toast('Registered Successfully')
          navigate('/');
          
         
        } 
      }catch(e){
        toast.error(e.message);
        console.log(e);
      }
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [id]: value
    }));
  };

  const handleShowPassword = ()=>{
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleAlreadyUser = ()=>{
    navigate('/login')
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
    <div className='main-user-register'>
      <nav className='nav-items'>
        <Link className='nav-group-logo' tag='a' to='/'>
          <img src={logo} className='nav-website-logo' alt='logo'/>
        </Link>
        <div className='nav-links'>
          <span className='nav-group-item' onClick={handleVideoClick}>Video Consult</span>
          <span className='nav-group-item' onClick={handleDoctorClick}>Find Doctors</span>
          <span className='nav-group-item' onClick={handleEducationClick}>Education</span>
          <span className='nav-group-item' onClick={handleLabTestClick}>Lab Test</span>
          
        </div>
      </nav>
      <hr/>
      <div className="main-user">
        <div className="main-user-service">
          <h1 id='main-user-head'>Join Us</h1>
          <form action="" onSubmit={handleUserRegister} className='main-register-entry'>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={userDetails.username}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              id="userEmail"
              placeholder="Email"
              value={userDetails.userEmail}
              onChange={handleInputChange}
              required
            />
            <div className="user-password register">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="password"
                value={userDetails.password}
                onChange={handleInputChange}
                required
              />
              <button type='button' onClick={handleShowPassword} id='register-eye'>{showPassword ?<img src="https://cdn-icons-png.flaticon.com/128/11502/11502607.png" alt="Show" /> :<img src="https://cdn-icons-png.flaticon.com/128/4855/4855030.png" alt="Hide" />}</button>
            </div>
            <button type="submit" className="signup">
              Sign Up
            </button>
          </form>
          <div className="move-to">
            <p onClick={handleAlreadyUser}><u>Already a User? Click Me</u></p>
          </div>
        </div>
      </div>
    </div>
  )
}
