import React from "react";
import { Row } from "react-bootstrap";

import {
  yoga,
  weight,
  dance,
} from '../../assets/interests';

const dummyData = [
  {
    userId: "someId1",
    name: "Jon Yates",
    profile_pic: yoga,
    following: "80"
  },
  {
    userId: "someId2",
    name: "Jane Doe",
    profile_pic: weight,
    following: "20"
  },
  {
    userId: "someId3",
    name: "Matthew Miller",
    profile_pic: dance,
    following: "180"
  }

]
class Step3 extends React.Component {
  // If we have the userId to the instructors object, can we then use that to req their objects to add to their following
  constructor(props) {
    super(props);
    this.state = {
      followers: []
    }
  }

 // Figure out how to apply onClick to the whole div rather than the img
  onClick = (event) => {
    console.log(event.target.className)
    // Update state array
    let removeIndex = this.state.followers.indexOf(event.target.name);
    if (removeIndex > -1) {
      this.setState({
        followers: this.state.followers.filter((followers) => {
          return followers !== event.target.name;
        })
      }, () => {
        this.props.getFollowers(this.state.followers);
      })
    } else {
      this.setState({
        // this is spreading the instructor state to the array, and adding the update
        followers: [...this.state.followers, event.target.name],
      }, () => {
        this.props.getFollowers(this.state.followers);
      })
    }
  }
  
  isHighlighted = (followers) => {
    console.log(this.state.followers)
    // Param passed in checks to see if it is in instructor array
    if (this.state.followers.includes(followers)) {
      return {
        border: 'solid 5px #7048E8',
        borderRadius: '10px',
      };
    }
    return {
      border: 'solid 1px black',
      borderRadius: '10px',
    };
  }
  
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    
    const usersProfiles = dummyData.map((user) => {
      // Figure out how to apply onClick to the whole div rather than the img
      // Figure out how to check for the user object rather than user.name - I'm not sure if its just adding the name to instructors state
      return (
        <Row key={user.name} style={this.isHighlighted(user.userId)} className="instructor">
            <div className='instructor-card-poster-picture-container col-md-2 col-lg-6'>
              <img name={user.userId}  onClick={this.onClick} className='profile-picture instructor-card-poster-picture' src={user.profile_pic} alt='profile' />
            </div>
            <div className='instructor-card-poster-info col-md-10 col-lg-6'>
              <p className='instructor-card-poster-name'>{user.name}</p>
              <p className='instructor-card-post-followers'>{user.following} followers</p>
            </div>
        </Row>
      )
    })

    return (
      <div>
        <label>Here are some people you might like to follow: </label>
        {usersProfiles}
      </div>
    );
  }
}

export default Step3;
