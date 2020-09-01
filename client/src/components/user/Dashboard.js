import React from 'react';
import Grid from '@material-ui/core/Grid';

const Dashboard = (props) => {
  return (
    <div className='db'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className='db-card-bottom'>
            <p className='db-card-title'>Upcoming workout</p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='db-card-top'>
            <p className='db-card-title'>Planned workouts</p>
            <p className='db-big-num' style={{color: '#6979F8'}}>
              12
            </p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='db-card-top'>
            <p className='db-card-title'>Completion rate</p>
            <p className='db-big-num' style={{color: '#D333A5'}}>
              75%
            </p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='db-card-top'>
            <p className='db-card-title'>Training hours</p>
            <p className='db-big-num' style={{color: '#7048E8'}}>
              15.5
            </p>
          </div>
        </Grid>
      </Grid>
      <br />
      <br />
      <hr></hr>
      <br />
    </div>
  )
}

export default Dashboard;