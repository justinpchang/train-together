import React from "react";
import { Form, Card, Button, Row } from "react-bootstrap";

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
      following: "25",
      followers: "38",
      workouts: "50",
      profile_pic: "train-together/client/src/assets/interests/boxing.png"
  },
  {
    name: "John Doe",
    following: "80",
    followers: "20",
    workouts: "0",
    profile_pic: "train-together/client/src/assets/interests/core.png"
}

]


class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: []
    }
  }

  onClick = (event) => {
    console.log(event.target.className)
    // Update state array
    let removeIndex = this.state.interests.indexOf(event.target.name);
    if (removeIndex > -1) {
      this.setState({
        interests: this.state.interests.filter((interest) => {
          return interest !== event.target.name;
        })
      }, () => {
        this.props.getInterests(this.state.interests);
      })
    } else {
      this.setState({
        interests: [...this.state.interests, event.target.name],
      }, () => {
        this.props.getInterests(this.state.interests);
      })
    }
  }

  isHighlighted = (interest) => {
    if (this.state.interests.includes(interest)) {
      return {
        border: 'solid 5px #D333A5',
        borderRadius: '10px',
      };
    }
    return {
      border: 'solid 5px transparent',
      borderRadius: '10px',
    };
  }

  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }

    const usersProfiles = dummyData.map((user) => {
      return (
        <Row>
          <div className='interest col-md-6'>
            <img src={yoga} name='yoga' onClick={this.onClick} style={this.isHighlighted('yoga')} />
            <p>{user.name}</p>
          </div>
          <div className='interest col-md-6'>
            <img src={weight} name='weight' onClick={this.onClick} style={this.isHighlighted('weight')} />
            <p>{user.name}</p>
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
