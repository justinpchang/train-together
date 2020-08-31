import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }

    return (
      <div>
        <label>Your full name*</label>
        <br />
        <input
          size="lg"
          type="text"
          name="name"
          value={this.props.name}
          onChange={this.props.handleChange}
        />
        <br />
        <br />
        <InputLabel id='gender-label'>Gender</InputLabel>
        <Select
          labelId='gender-label'
          className='age-select'
          name='gender'
          value={this.props.gender}
          onChange={this.props.handleChange}
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>
        <br />
        <br />
        <InputLabel id='age-label'>Age</InputLabel>
        <Select
          labelId='age-label'
          className='age-select'
          name='age'
          value={this.props.age}
          onChange={this.props.handleChange}
        >
          <MenuItem value={'15-20'}> 15 - 20</MenuItem>
          <MenuItem value={'21-30'}> 21 - 30</MenuItem>
          <MenuItem value={'31-40'}> 31 - 40</MenuItem>
          <MenuItem value={'41-50'}> 41 - 50</MenuItem>
          <MenuItem value={'Over 50'}> Over 50</MenuItem>
        </Select>
        <br />
      </div>
    );
  }
}

export default Step1;
