import React from "react";

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }

    return (
      <div>
        <h5>Here are some people you might like to follow!</h5>
      </div>
    );
  }
}

export default Step3;
