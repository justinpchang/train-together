import React from "react";

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: []
    }
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
        this.props.getInstructors(this.state.instructors);
      })
    } else {
      this.setState({
        instructors: [...this.state.instructors, event.target.name],
      }, () => {
        this.props.getInstructors(this.state.instructors);
      })
    }
  }
  
  isHighlighted = (instructors) => {
    if (this.state.instructors.includes(instructors)) {
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
    
    console.log(this.props)
    const usersProfiles = dummyData.map((user) => {
      return (
        <Row>
          <div key="user" className='instructor col-md-12'>
            <img src={user.profile_pic} name={user.name} onClick={this.onClick} style={this.isHighlighted(user.name)} />
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
