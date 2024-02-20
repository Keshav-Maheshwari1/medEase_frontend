import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import { url } from '../springboot';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useUserContext } from '../User';
export const Login = () => {
  const {setDisplayUser} = useUserContext()
  const[showPassword,setShowPassword] = useState(false);
  const[userDetails,setUserDetails] = useState({
    userEmail: '',
    password: ''
  }) 
  const navigate = useNavigate()
  const handleUserLogin = async (event) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
  
    if (userDetails.userEmail !== '' && userDetails.password !== '') {
      try{
        const response = await axios.post(url+"/login", userDetails, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if(response.status === 200 ){
          setDisplayUser(response.data)
          toast('Welcome Back')
          navigate('/'); 
        }
        

      }catch(e){
        toast('Login Failed! Try Registering')
        navigate('/Register')
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
    setShowPassword((preShowPassword) => !preShowPassword)
  }
  const handleNotUser = ()=>{
    navigate('/Register')
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
    <div className='main-user-login'>
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
          <h1>Welcome Back</h1>
          <form action="" onSubmit={handleUserLogin} className='main-login-entry'>
              <input
                type="text"
                id="userEmail"
                placeholder="Email"
                value={userDetails.userEmail}
                onChange={handleInputChange}
                required
              />
              <div className="user-password">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="password"
                  value={userDetails.password}
                  onChange={handleInputChange}
                  required
                />
                <button type='button' onClick={handleShowPassword} id='login-eye'>{showPassword ? <img src="https://cdn-icons-png.flaticon.com/128/11502/11502607.png" alt="Show" />:<img src="https://cdn-icons-png.flaticon.com/128/4855/4855030.png" alt="Hide" />}</button>
                
              </div>
              <button type="submit" className="signin">
                  Sign In
                </button>
          </form>
          <div className="move-to">
            <p onClick={handleNotUser}><u>Not A User? Click Me</u></p>
          </div>
        </div>
      </div>
    </div>
  )
}
