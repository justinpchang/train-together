import React from 'react';
import { Row } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

import Feed from './feed';
import Navigation from './Navigation';
import { NewClassForm } from './class';
import { ProfileGlance } from './user';
import { Select, MenuItem } from '@material-ui/core';

const Home = () => {
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
  const [open, setOpen] = React.useState(false);
  const onOpen = () => {
    setOpen(false);
  }
  const handleClassChange = (event) => {
    const {name, value} = event.target;
    const newState = Object.assign({}, newClass);
    newState[name] = value;
    setNewClass(newState);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    alert(JSON.stringify(newClass));
  }

  /*
    Call API for profile info
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
              open={open}
              onOpen={onOpen}
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
            <Feed />
          </Row>
        </div>
        <div className='col-md-1'>
        </div>
      </Row>
    </div>
  );
};

export default Home;