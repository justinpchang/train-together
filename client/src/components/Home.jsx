import React from 'react';
import { Row } from 'react-bootstrap';

import Feed from './feed';
import Navigation from './Navigation';
import Loading from './Loading';
import { NewClassForm } from './class';
import { ProfileGlance } from './user';
import { Select, MenuItem } from '@material-ui/core';
import { getUser, getFeed, createSession } from '../utils';

/*
  Home component:
  Main display for a logged-in user. Shows a profile glance on the left and a feed on the right.
  This component makes API calls to populate both profile and feed.
*/

const Home = (props) => {
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

  const [scope, setScope] = React.useState('Following');
  const [profile, setProfile] = React.useState({});
  const [gotUser, userGotten] = React.useState(false);

  // Re-render when receive user data or render loading screen
  if (props.user.name && !gotUser) {
    console.log(`my user ${props.user}`)
    setProfile(props.user);
    userGotten(true);
  }

  // Get global feed from api
  React.useEffect(() => {
    console.log('gotUser has changed');
    const populateCards = async () => {
      // Get feed
      const feed = (await getFeed(props.userId));
      let session;
      let _cards = [];
      for (session of feed) {
        const host = (await getUser(session.userId)).Item;
        const card = {
          name: host.name,
          profilePic: host.attachmentUrl,
          postTime: session.createdAt,
          description: session.description,
          title: session.title,
          tags: session.tags,
          date: session.eventDate,
          attending: session.slots,
          sessionId: session.sessionId,
          sessionPic: session.attachmentUrl,
        }
        _cards.push(card);
      }
      console.log(_cards);
      setCards(_cards);
    }

    populateCards();
  }, [gotUser]);

  const handleChange = (event) => {
    setScope(event.target.value);
  };
  
  // New class form
  const [newClass, setNewClass] = React.useState({
    title: '',
    description: '',
    date: Date.now(),
    tags: ['cardio', 'healthy', 'fit'],
  });
  const handleClassChange = (event) => {
    const {name, value} = event.target;
    const newState = Object.assign({}, newClass);
    newState[name] = value;
    setNewClass(newState);
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create session
    createSession(
      props.userId,
      newClass.title,
      newClass.date,
      newClass.description,
      newClass.tags
    ).then((res) => {
      console.log('created a new session');
      console.log(res);
      window.location.reload();
    });
  }

  // Return loading screen if no name info
  if (!profile.name || !cards.length) {
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
              profilePic={profile.profilePic}
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
            <Feed cards={cards} userId={props.userId} showSubmit={true} />
          </Row>
        </div>
        <div className='col-md-1'>
        </div>
      </Row>
    </div>
  );
};

export default Home;