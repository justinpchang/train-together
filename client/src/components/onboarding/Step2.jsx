import React from "react";
import { Form } from "react-bootstrap";

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }

    return (
      <div>
        <h6>Age*</h6>
        <input
          size="lg"
          type="text"
          name="age"
          placeholder="yes"
          value={this.props.age}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Step2;
