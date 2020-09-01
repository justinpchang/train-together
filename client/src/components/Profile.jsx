import React from 'react';
import { Row } from 'react-bootstrap';

import Feed from './feed';
import Navigation from './Navigation';
import { ProfileGlance, Dashboard } from './user';

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
      <Row style={{marginTop: '50px'}}>
        <div className='sidebar-container col-md-4'>
          <Row className='sidebar'>
            <ProfileGlance
              name={profile.name}
              following={profile.following}
              followers={profile.followers}
              workouts={profile.workouts}
            />
          </Row>
        </div>
        <div className='center-container col-md-7'>
          <Row className='center'>
            {(props.showDashboard) ? <Dashboard /> : <React.Fragment />}
            <Feed cards={cards} />
          </Row>
        </div>
        <div className='col-md-1'>
        </div>
      </Row>
    </div>
  );
};

export default Profile;