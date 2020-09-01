import React from 'react';
import { Row } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

import Feed from './feed';
import Navigation from './Navigation';
import { NewClassForm } from './class';
import { ProfileGlance } from './user';
import { Select, MenuItem } from '@material-ui/core';

const Home = () => {
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

  const [scope, setScope] = React.useState('Following');
  const [profile, setProfile] = React.useState({
    name: 'Jessie J.',
    following: '38',
    followers: '38',
    workouts: '17',
  });

  const handleChange = (event) => {
    setScope(event.target.value);
  };
  
  // New class form
  const [newClass, setNewClass] = React.useState({
    title: '',
    description: '',
    date: Date.now(),
  });
  const handleClassChange = (event) => {
    const {name, value} = event.target;
    const newState = Object.assign({}, newClass);
    newState[name] = value;
    setNewClass(newState);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(newClass));
  }

  /*
    Call API for profile info, cards
    Use setProfile()
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
            <NewClassForm
              title={newClass.title}
              description={newClass.description}
              date={newClass.date}
              handleChange={handleClassChange}
              handleSubmit={handleSubmit}
            />
            <Select
              className='scope-selector'
              value={scope}
              onChange={handleChange}
              autoWidth
            >
              <MenuItem value={'Following'}>Following</MenuItem>
              <MenuItem value={'My Posts'}>My Posts</MenuItem>
              <MenuItem value={'Global'}>Global</MenuItem>
            </Select>
            <Feed cards={cards} />
          </Row>
        </div>
        <div className='col-md-1'>
        </div>
      </Row>
    </div>
  );
};

export default Home;