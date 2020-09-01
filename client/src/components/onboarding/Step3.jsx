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
    name: "Jon Yates",
    profile_pic: yoga,
    followers: "80"
  },
  {
    name: "Jane Doe",
    profile_pic: weight,
    followers: "20"
  },
  {
    name: "Matthew Miller",
    profile_pic: dance,
    followers: "180"
  }

]
class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: []
    }
  }

  getInstructors = (instructors) => {
    this.setState({instructors: instructors});
  }

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
        this.getInstructors(this.state.instructors);
      })
    } else {
      this.setState({
        instructors: [...this.state.instructors, event.target.name],
      }, () => {
        this.getInstructors(this.state.instructors);
      })
    }
    console.log(this.state.instructors)
  }
  
  isHighlighted = (instructors) => {
    if (this.state.instructors.includes(instructors)) {
      return {
        border: 'solid 5px #D333A5',
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
    
    console.log(this.props)
    const usersProfiles = dummyData.map((user) => {
      return (
        <Row key={user.id} name={user.name} className="instructor" onClick={this.onClick} style={this.isHighlighted(this.state.instructors[-1])}>
            <div className='instructor-card-poster-picture-container col-md-2'>
              <img className='profile-picture instructor-card-poster-picture' src={user.profile_pic} alt='profile' />
            </div>
            <div className='instructor-card-poster-info col-md-10'>
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
