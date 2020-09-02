import React from 'react';
import Grid from '@material-ui/core/Grid';
import defaultProfilePicture from '../../assets/default-profile-picture.png';
import classModalThumbnail from '../../assets/class-modal-thumbnail.png';
import { Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { registerSession } from '../../utils';

const Dashboard = (props) => {
  const sampleSession = {
    name: 'Chloe Ting',
    postTime: '20 minutes ago',
    description: 'Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule, so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight. A 2 weeks program is easier to commit to, and you can always do it again after you finish it! Starting from 7th Sep!',
    title: 'Get Abs in 2 WEEKS',
    tags: ['Abs', 'Core', 'Intermediate'],
    date: '7 Sep 2020',
    attending: '143',
  } 
  
  const handleRegister = (event) => {
    registerSession(props.userId, props.sessionId);
  }

  return (
    <div className='db'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className='db-card-bottom'>
            <p className='db-card-title'>Recommended workout</p>
            <Row className='feed-card-mini-container'>
              <div className='feed-card-mini' style={{backgroundImage: `linear-gradient(to bottom, transparent 220px, white 0%), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(106, 33, 207, 0.23) 20%), url(${classModalThumbnail})`}}>
                <div className='feed-card-mini-text'>
                  <p>Join {sampleSession.name} in:</p>
                  <p>{sampleSession.title}</p>
                  <p className='feed-card-mini-trainer'>{sampleSession.name}</p>
                  <Row className='feed-card-mini-tags'>
                    {
                      sampleSession.tags.map((tag, i) => (
                        <span
                          key={i}
                          className='feed-card-mini-tag'
                        >{tag}</span>
                      ))
                    }
                  </Row>
                  <Row className='feed-card-mini-info'>
                    <span className='feed-card-mini-date'><FontAwesomeIcon icon={faClock} /> {sampleSession.date}</span>
                    <span className='feed-card-mini-date'><FontAwesomeIcon icon={faHeart} /> 1</span>
                    <span className='feed-card-mini-date'><FontAwesomeIcon icon={faComment} /> 1</span>
                    <div className='feed-card-mini-attendees'>{sampleSession.attending} attending</div>
                  </Row>
                  <Row className='feed-card-mini-buttons'>
                    <Button
                      className='feed-card-mini-register'
                      onClick={handleRegister}
                    >
                      'Register'
                    </Button>
                    <Button
                      className='feed-card-mini-details'
                    >Details</Button>
                  </Row>
                </div>
              </div>
            </Row>
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