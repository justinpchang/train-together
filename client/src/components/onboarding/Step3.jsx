import React from "react";
import { Form } from "react-bootstrap";

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }

    return (
      <div>
        <h5>Goals</h5>
        <input
          size="lg"
          type="text"
          name="goals"
          placeholder="get huge"
          value={this.props.goals}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Step3;
