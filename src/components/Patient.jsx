import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import logo from '../images/logo.png';
import {Feedback} from './Feedback'; 
import {Logout} from './Logout'; 
import { Database } from './Database';
import { useUserContext } from '../User';

export const Patient = () => {
  const {displayUser} = useUserContext();
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const ClassRoomId = Math.floor(displayUser.Id+10101021);

  return (
    <>
      <nav className='nav-items'>
        <Link className='nav-group-logo' tag='a' to='/'>
          <img src={logo} className='nav-website-logo' alt='logo' />
        </Link>
        <div className='nav-links'>
          <span className='nav-group-item' onClick={() => handleButtonClick('Video')}>
            Video Consult
          </span>
          <span className='nav-group-item' onClick={() => handleButtonClick('Find Doctors')}>
            Find Doctors
          </span>
          <span className='nav-group-item' onClick={() => handleButtonClick('Education')}>
            Education
          </span>
          <span className='nav-group-item' onClick={() => handleButtonClick('Lab Test')}>
            Lab Test
          </span>
        </div>
      </nav>
      <hr />
      <Container className='patient-container'>
        <Row className='patient-details'>
          <Col md={4} className='patient-details-col1'>
            <Button
              className={`patient-details-button ${activeButton === 'User' ? 'active' : ''}`}
              onClick={() => handleButtonClick('User')}
            >
              User
            </Button>
            <Button
              className={`patient-details-button ${activeButton === 'Your Videos' ? 'active' : ''}`}
              onClick={() => handleButtonClick('Your Videos')}
            >
              Your Videos
            </Button>
            <Button
              className={`patient-details-button ${activeButton === 'FeedBack' ? 'active' : ''}`}
              onClick={() => handleButtonClick('FeedBack')}
            >
              FeedBack
            </Button>
            <Button
              className={`patient-details-button logout ${activeButton === 'Logout' ? 'active' : ''}`}
              onClick={() => handleButtonClick('Logout')}
            >
              Logout
            </Button>
          </Col>
          <Col md={8} className='patient-details-col2'>
            {activeButton === 'User' && 
              <div>
                <h1>{displayUser === "Register/Login"? displayUser: `Hello ${displayUser.username} 🙋‍♂️`}</h1>
                <h3>Room Joining ID: {ClassRoomId}</h3>
              </div>}
            {activeButton === 'Your Videos' && <Database />}
            {activeButton === 'FeedBack' && <Feedback />}
            {activeButton === 'Logout' && <Logout />}
          </Col>
        </Row>
      </Container>
    </>
  );
};
