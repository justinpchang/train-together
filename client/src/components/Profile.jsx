import React from 'react';
import { Row } from 'react-bootstrap';

import defaultProfilePicture from '../assets/user-profile.png';
import Feed from './feed';
import Navigation from './Navigation';

/*
  Profile component. This page shows user information at the top and a history feed at the bottom.
  This component makes API calls for user info and history.
*/

const Profile = (props) => {
  const sampleSession = {
    name: 'Chloe Ting',
    postTime: '20 minutes ago',
    description: 'Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule, so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight. A 2 weeks program is easier to commit to, and you can always do it again after you finish it! Starting from 7th Sep!',
    title: 'Get Abs in 2 WEEKS',
    tags: ['Abs', 'Core', 'Intermediate'],
    date: '7 Sep 2020',
    attending: '143',
  }
  const cards = [
    Object.assign({}, sampleSession),
    Object.assign({}, sampleSession),
    Object.assign({}, sampleSession),
    Object.assign({}, sampleSession),
    Object.assign({}, sampleSession),
    Object.assign({}, sampleSession),
  ]
  const [profile, setProfile] = React.useState({
    name: 'Jessie J.',
    following: '38',
    followers: '38',
    workouts: '17',
  });

  /*
    Use API to get profile info and cards
  */

  return (
    <div>
      <Navigation />
      <Row className='profile-row'>
        <div className='col-md-3'>
          <img className='profile-picture' src={defaultProfilePicture} alt='profile' />
        </div>
        <div className='profile-info col-md-9'>
          <Row>
            <h2>{profile.name}</h2>
          </Row>
          <Row>
            <p><span className='profile-number'>{profile.workouts}</span> workouts</p>
            <p><span className='profile-number'>{profile.following}</span> following</p>
            <p><span className='profile-number'>{profile.followers}</span> followers</p>
          </Row>
        </div>
      </Row>
      <hr />
      <Row className='profile-feed-container'>
        <Feed cards={cards} />
      </Row>
    </div>
  );
};

export default Profile;