import React from "react";

import Step1 from "./Step1";
import Step2 from './Step2';
import Step3 from './Step3';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      name: '',
      age: '',
      goals: '',
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
        <button type='submit'>FINISH</button>
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

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, goals } = this.state;
    alert(name + age + goals);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            name={this.state.name}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            age={this.state.age}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            goals={this.state.goals}
          />
          {this.previousButton}
          {this.nextButton}
          {this.submitButton}
        </form>
      </React.Fragment>
    )
  }
};

export default Onboarding;
