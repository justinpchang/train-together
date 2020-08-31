import React from 'react';

import UserStats from './UserStats';

const ProfileGlance = (props) => {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <UserStats
        followers={props.followers}
        following={props.following}
        workouts={props.workouts}
      />
      <br />
      <div className='last-workout-info'>
        <p>Last Workout</p>
        <br />
        <br />
        <p>View Workout Log</p>
      </div>
    </React.Fragment>
  );
}

export default ProfileGlance;