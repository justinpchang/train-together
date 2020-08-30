import React from "react";
import { Form } from "react-bootstrap";

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }

    return (
      <div>
        <h6>Your Full Name*</h6>
        <input
          size="lg"
          type="text"
          name="name"
          placeholder="Mr. Works-out-a-lot"
          value={this.props.name}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Step1;
