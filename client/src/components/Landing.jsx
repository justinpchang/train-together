import React from 'react';
import { Row } from 'react-bootstrap';

import HeroImage from '../assets/hero-image.jpg';
import {RegisterButton, LoginButton} from './auth';

const Landing = () => {
  return (
    <div className='landing-container'>
      <div className='background'></div>
      <div className='hero-image-container'>
        <img className='hero-image' src={HeroImage} alt='hero-image' />
      </div>
      <div className='landing'>
        <Row>
          <div className='col-md-7'>
          </div>
          <div className='landing-text col-md-5'>
            <h1 style={{marginTop: '25%'}}>Get Stronger,</h1>
            <h1>Like Never Before.</h1>
            <br />
            <LoginButton />
            <br />
            <RegisterButton />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Landing;