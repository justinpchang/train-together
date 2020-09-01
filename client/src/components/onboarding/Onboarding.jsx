import React from "react";

import Step1 from "./Step1";
import Step2 from './Step2';
import Step3 from './Step3';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 3,
      name: '',
      gender: '',
      age: '',
      goals: '',
      interests: []
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
          style={{background: '#D333A5'}}
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
          style={{background: '#D333A5'}}
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

  handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.state));
    this.props.onSubmit();
  }

  render() {
    return (
      <div class='onboarding'>
        <form onSubmit={this.handleSubmit}>
          <h1>Welcome!</h1>
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
