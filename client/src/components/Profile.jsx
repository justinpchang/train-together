import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Row } from 'react-bootstrap';

import defaultProfilePicture from '../assets/default-profile-picture.png';

const profileInfoStyle = {
  display: 'flex',
  //justifyContent: 'space-around',
  margin: '18px 0px',
  boxSizing: 'none',
}

const profileTextStyle = {
  marginTop: '40px',
}

const profileStatsStyle = {
  display: 'flex',
}

const profileStatStyle = {
  marginRight: '10px',
}

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <Row>
        <div className='col-md-3'>
          <img className='profile-picture' src={defaultProfilePicture} />
        </div>
        <div className='profile-info col-md-9'>
          <Row>
            <h2>Adam Smith</h2>
          </Row>
          <Row>
            <p><span className='profile-number'>40</span> workouts</p>
            <p><span className='profile-number'>100</span> following</p>
            <p><span className='profile-number'>80</span> followers</p>
          </Row>
        </div>
      </Row>
      <hr />
      <Row>
        Feed goes here!
      </Row>
    </div>
  );
};

export default Profile;