import React from "react";
import { Row } from "react-bootstrap";

import {
  yoga,
  weight,
  core,
  boxing,
  dance,
  other
} from '../../assets/interests';

const dummyData = [
  {
    userId: "someId1",
    name: "Jon Yates",
    profile_pic: yoga,
    followers: "80"
  },
  {
    userId: "someId2",
    name: "Jane Doe",
    profile_pic: weight,
    followers: "20"
  },
  {
    userId: "someId3",
    name: "Matthew Miller",
    profile_pic: dance,
    followers: "180"
  }

]
class Step3 extends React.Component {
  // If we have the userId to the instructors object, can we then use that to req their objects to add to their following
  constructor(props) {
    super(props);
    this.state = {
      instructors: []
    }
  }

  getInstructors = (instructors) => {
    this.setState({instructors: instructors});
  }
 // Figure out how to apply onClick to the whole div rather than the img
  onClick = (event) => {
    console.log(event.target.className)
    // Update state array
    let removeIndex = this.state.instructors.indexOf(event.target.name);
    if (removeIndex > -1) {
      this.setState({
        instructors: this.state.instructors.filter((instructors) => {
          return instructors !== event.target.name;
        })
      }, () => {
        // console.log(event.target.name + 'HERE')
        this.getInstructors(this.state.instructors);
      })
    } else {
      this.setState({
        // this is spreading the instructor state to the array, and adding the update
        instructors: [...this.state.instructors, event.target.name],
      }, () => {
        this.getInstructors(this.state.instructors);
      })
    }
    // console.log(this.state.instructors)
  }
  
  isHighlighted = (instructors) => {
    console.log(this.state.instructors)
    // Param passed in checks to see if it is in instructor array
    if (this.state.instructors.includes(instructors)) {
      return {
        border: 'solid 3px #D333A5',
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
              <p className='instructor-card-post-followers'>{user.followers} followers</p>
            </div>
        </Row>
      )
    })

    return (
      <div>
        <h5>Here are some people you might like to follow!</h5>
        {usersProfiles}
      </div>
    );
  }
}

export default Step3;
