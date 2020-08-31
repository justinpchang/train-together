import React from 'react';
import { Row } from 'react-bootstrap';

const UserStats = (props) => {
  return (
    <React.Fragment>
      <Row className='user-stats'>
        <div className='border-right col-md-4'>
          <p>Following</p>
          <span>{props.following}</span>
        </div>
        <div className='border-right col-md-4'>
          <p>Followers</p>
          <span>{props.followers}</span>
        </div>
        <div className='col-md-4'>
          <p>Workouts</p>
          <span>{props.workouts}</span>
        </div>
      </Row>
    </React.Fragment>
  );
}

export default UserStats;