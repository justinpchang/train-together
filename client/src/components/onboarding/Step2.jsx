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

class Step2 extends React.Component {
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
        border: 'solid 5px #7048E8',
        borderRadius: '10px',
      };
    }
    return {
      border: 'solid 5px transparent',
      borderRadius: '10px',
    };
  }

  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }

    return (
      <div>
        <label>Select some workouts that sound fun:</label>
        <br />
        {this.generateInterests}
        <Row>
          <div className='interest col-md-6'>
            <img src={yoga} alt='yoga' name='yoga' onClick={this.onClick} style={this.isHighlighted('yoga')} />
            <p>Yoga</p>
          </div>
          <div className='interest col-md-6'>
            <img src={weight} alt='weight' name='weight' onClick={this.onClick} style={this.isHighlighted('weight')} />
            <p>Weight Training</p>
          </div>
        </Row>
        <Row>
          <div className='interest col-md-6'>
            <img src={core} alt='core' name='core' onClick={this.onClick} style={this.isHighlighted('core')} />
            <p>Core Workout</p>
          </div>
          <div className='interest col-md-6'>
            <img src={boxing} alt='boxing' name='boxing' onClick={this.onClick} style={this.isHighlighted('boxing')} />
            <p>Boxing</p>
          </div>
        </Row>
        <Row>
          <div className='interest col-md-6'>
            <img src={dance} alt='dance' name='dance' onClick={this.onClick} style={this.isHighlighted('dance')} />
            <p>Dance</p>
          </div>
          <div className='interest col-md-6'>
            <img src={other} alt='other' name='other' onClick={this.onClick} style={this.isHighlighted('other')} />
            <p>Other</p>
          </div>
        </Row>
      </div>
    );
  }
}

export default Step2;
