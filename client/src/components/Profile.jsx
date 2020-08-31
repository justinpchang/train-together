import React from 'react';
import { Row } from 'react-bootstrap';

import defaultProfilePicture from '../assets/user-profile.png';
import Feed from './feed';
import Navigation from './Navigation';

const Profile = () => {
  return (
    <div>
      <Navigation />
      <Row className='profile-row'>
        <div className='col-md-3'>
          <img className='profile-picture' src={defaultProfilePicture} alt='profile' />
        </div>
        <div className='profile-info col-md-9'>
          <Row>
            <h2>Jessie J.</h2>
          </Row>
          <Row>
            <p><span className='profile-number'>38</span> workouts</p>
            <p><span className='profile-number'>38</span> following</p>
            <p><span className='profile-number'>17</span> followers</p>
          </Row>
        </div>
      </Row>
      <hr />
      <Row className='profile-feed-container'>
        <Feed />
      </Row>
    </div>
  );
};

export default Profile;