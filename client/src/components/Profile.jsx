import React from 'react';
import { Row } from 'react-bootstrap';

import Feed from './feed';
import Navigation from './Navigation';
import Loading from './Loading';
import { ProfileGlance, Dashboard } from './user';

import {
  checkUserEmail,
  getUser,
  getHistory,
} from '../utils';

/*
  Profile component. This page shows user information at the top and a history feed at the bottom.
  This component makes API calls for user info and history.
*/

const Profile = (props) => {
  const sampleSession = {
    name: 'Chloe Ting',
    postTime: '20 minutes ago',
    description: 'Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule, so I put together a 2 weeks schedule to help you get closer to those defined abs and to lose weight. A 2 weeks program is easier to commit to, and you can always do it again after you finish it! Starting from 7th Sep!',
    title: 'Get Abs in 2 WEEKS',
    tags: ['Abs', 'Core', 'Intermediate'],
    date: '7 Sep 2020',
    attending: '143',
  }
  const [cards, setCards] = React.useState([]);
  
  // Get user info
  const [userId, setUserId] = React.useState('')
  const [profile, setProfile] = React.useState({});
  const [gotUser, userGotten] = React.useState(false);
  React.useEffect(() => {
    if (!gotUser) {
      checkUserEmail(localStorage.getItem('email')).then((uId) => {
        const userId = uId.replace(/^"(.*)"$/, '$1');
        getUser(userId).then((res) => {
          setProfile({
            name: res.Item.name,
            following: res.Item.following,
            followers: res.Item.followed,
            workouts: res.Item.sessionAttended,
          });
          userGotten(true);
        }).catch((error) => {
          console.log(error);
        })
        setUserId(userId);
      });
    }
  }, [gotUser]);

  // Get user feed from api
  React.useEffect(() => {
    console.log(`trying to get history of ${userId}`);
    if (userId !== '') {
      getHistory(userId).then((res) => {
        let _cards = [];
        res.forEach((session) => {
          // Get creator name
          getUser(session.userId).then((res) => {
            console.log(res);
            const _name = res.Item.name;
            // Set name
            _cards.push({
              name: _name,
              postTime: session.createdAt,
              description: session.description,
              title: session.title,
              tags: session.tags,
              date: session.eventDate,
              attending: 25-session.slots
            });
            console.log('SETTING CARDS');
            setCards(_cards);
          })
        })
      })
    }
  }, [userId]);

  if (!profile.name) {
    return (<Loading />);
  }

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
            {(props.showDashboard) ? <Dashboard /> : <React.Fragment />}
            <Feed cards={cards} />
          </Row>
        </div>
        <div className='col-md-1'>
        </div>
      </Row>
    </div>
  );
};

export default Profile;