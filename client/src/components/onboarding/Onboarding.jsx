import React from "react";

import Step1 from "./Step1";
import Step2 from './Step2';
import Step3 from './Step3';

/*
  Onboarding component. If the user has just registered, they must go through a couple setup steps.
  This component makes an API call to create a new user after everything is done.
*/

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      name: '',
      gender: '',
      age: '',
      goals: '',
      interests: [],
      followers: []
    };
  }

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    })
  }

  get previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className='btn btn-secondary'
          style={{background: 'black'}}
          type='button'
          onClick={this._prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className='btn btn-primary float-right'
          style={{background: '#7048E8'}}
          type='button'
          onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 2) {
      return (
        <button
          className='btn btn-primary float-right'
          style={{background: '#7048E8'}}
          type='submit'
          onClick={this.handleSubmit}>
          Finish
        </button>
      );
    }
    return null;
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  getInterests = (interests) => {
    this.setState({interests: interests});
  }
  getFollowers = (followers) => {
    this.setState({followers: followers});
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div class='onboarding'>
        <form onSubmit={this.handleSubmit}>
          <h1>Complete Your Profile</h1>
          <p>Just a few more steps...</p>
          <br />
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            name={this.state.name}
            gender={this.state.gender}
            age={this.state.age}
          />
          <Step2
            currentStep={this.state.currentStep}
            getInterests={this.getInterests}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            goals={this.state.goals}
            getFollowers={this.getFollowers}
          />
          <br />
          {this.previousButton}
          {this.nextButton}
          {this.submitButton}
        </form>
      </div>
    )
  }
};

export default Onboarding;
