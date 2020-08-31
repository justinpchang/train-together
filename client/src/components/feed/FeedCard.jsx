import React from 'react';
import { Button, Row } from 'react-bootstrap';

import defaultProfilePicture from '../../assets/default-profile-picture.png';
import classModalThumbnail from '../../assets/class-modal-thumbnail.png';

const FeedCard = () => {
  return (
    <React.Fragment>
      <div className='feed-card'>
        <div className='feed-card-poster'>
          <Row>
            <div className='feed-card-poster-picture-container col-md-2'>
              <img className='profile-picture feed-card-poster-picture' src={defaultProfilePicture} alt='profile' />
            </div>
            <div className='feed-card-poster-info col-md-10'>
              <p className='feed-card-poster-name'>Chloe Ting</p>
              <p className='feed-card-post-time'>20 minutes ago</p>
            </div>
          </Row>
          <Row>
            <p className='feed-card-post-text'>
              Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule, so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight. A 2 weeks program is easier to commit to, and you can always do it again after you finish it! Starting from 7th Sep!
            </p>
          </Row>
          <Row className='feed-card-mini-container'>
            <div className='feed-card-mini' style={{backgroundImage: `linear-gradient(to bottom, transparent 220px, white 0%), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(106, 33, 207, 0.23) 20%), url(${classModalThumbnail})`}}>
              <div className='feed-card-mini-text'>
                <p>Get Abs in 2 WEEKS</p>
                <p>: Abs Workout Challenge</p>
                <p className='feed-card-mini-trainer'>CHLOE TING</p>
                <Row className='feed-card-mini-tags'>
                  <span className='feed-card-mini-tag'>Abs</span>
                  <span className='feed-card-mini-tag'>Core</span>
                  <span className='feed-card-mini-tag'>Intermediate</span>
                </Row>
                <Row className='feed-card-mini-info'>
                  <span className='feed-card-mini-date'>7 Sep 2020</span>
                  <span className='feed-card-mini-date'>180 likes</span>
                  <span className='feed-card-mini-date'>278 comments</span>
                  <span className='feed-card-mini-attendees'>143 attending</span>
                </Row>
                <Row className='feed-card-mini-buttons'>
                  <Button
                    className='feed-card-mini-register'
                  >Register</Button>
                  <Button
                    className='feed-card-mini-details'
                  >Details</Button>
                </Row>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeedCard;
