import React from 'react';
import { Row } from 'react-bootstrap';

import Feed from './feed';
import Navigation from './Navigation';
import { NewClassForm } from './class';
import { ProfileGlance } from './user';
import { Select, MenuItem } from '@material-ui/core';

const Home = () => {
  const [scope, setScope] = React.useState('Following');
  const handleChange = (event) => {
    setScope(event.target.value);
  };

  return (
    <div>
      <Navigation />
      <Row>
        <div className='sidebar-container col-md-4'>
          <Row className='sidebar'>
            <ProfileGlance
              name='Jessie J.'
              following='38'
              followers='38'
              workouts='17'
            />
          </Row>
        </div>
        <div className='center-container col-md-7'>
          <Row className='center'>
            <NewClassForm />
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