import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

import defaultProfilePicture from '../../assets/default-profile-picture.png';
import classModalThumbnail from '../../assets/class-modal-thumbnail.png';

const FeedCard = (props) => {
  return (
    <React.Fragment>
      <div className='feed-card'>
        <div className='feed-card-poster'>
          <Row>
            <div className='feed-card-poster-picture-container col-md-2'>
              <img className='profile-picture feed-card-poster-picture' src={defaultProfilePicture} alt='profile' />
            </div>
            <div className='feed-card-poster-info col-md-10'>
              <p className='feed-card-poster-name'>{props.name}</p>
              <p className='feed-card-post-time'>{props.postTime}</p>
            </div>
          </Row>
          <Row>
            <p className='feed-card-post-text'>{props.description}</p>
          </Row>
          <Row className='feed-card-mini-container'>
            <div className='feed-card-mini' style={{backgroundImage: `linear-gradient(to bottom, transparent 220px, white 0%), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(106, 33, 207, 0.23) 20%), url(${classModalThumbnail})`}}>
              <div className='feed-card-mini-text'>
                <p>Join {props.name} in:</p>
                <p>{props.title}</p>
                <p className='feed-card-mini-trainer'>{props.name}</p>
                <Row className='feed-card-mini-tags'>
                  {
                    props.tags.map((tag, i) => (
                      <span
                        key={i}
                        className='feed-card-mini-tag'
                      >{tag}</span>
                    ))
                  }
                </Row>
                <Row className='feed-card-mini-info'>
                  <span className='feed-card-mini-date'><FontAwesomeIcon icon={faClock} /> {props.date}</span>
                  <span className='feed-card-mini-date'><FontAwesomeIcon icon={faHeart} /> {props.likes}</span>
                  <span className='feed-card-mini-date'><FontAwesomeIcon icon={faComment} /> {props.comments}</span>
                  <div className='feed-card-mini-attendees'>{props.attending} attending</div>
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
