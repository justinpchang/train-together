import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import defaultProfilePicture from '../../assets/user-profile.png';
import UserStats from './UserStats';

const ProfileGlance = (props) => {
  return (
    <React.Fragment>
      <div className='profile-glance'>
        <div className='profile-glance-background'></div>
        <div className='profile-glance-picture'>
          <img className='profile-picture' src={defaultProfilePicture} alt='profile' />
        </div>
        <h3 className='profile-glance-name'>{props.name}</h3>
        <div className='profile-glance-user-stats'>
          <UserStats
            followers={props.followers}
            following={props.following}
            workouts={props.workouts}
          />
        </div>
        <br />
        <div className='last-workout-info border-bottom'>
          <span>Last Workout</span>
          <br />
          <span className='bold'>Cardio for beginniners</span>
          <br />
          <span>Aug 29, 2020</span>
        </div>
        <Row className='workout-log'>
          <Link to='/workouts'>
            <p>View Workout Log</p>
          </Link>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default ProfileGlance;