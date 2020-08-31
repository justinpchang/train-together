import React from 'react';
import { Row } from 'react-bootstrap';

import Feed from './feed';
import { NewClassForm } from './class';
import { ProfileGlance } from './user';

const Home = () => {
  return (
    <div>
      <div className='navbar'></div>
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