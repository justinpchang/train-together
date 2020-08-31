import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Row, Button } from 'react-bootstrap';

/*
 * TODO: add preview form -> expanding
 */
const NewClassForm = () => {
  const [selectedDate, setSelectedDate] = React.useState(Date.now());
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(selectedDate);
  };

  return (
    <React.Fragment>
      <div className='new-class-form'>
        <label>Schedule a new workout...</label>
        <TextField
          label='Title'
          className='new-class-title'
        />
        <TextField
          label='Description'
          className='new-class-description'
          multiline
          rows={3}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Row className='new-class-submit-row'>
          <span className='col-md-2'>Photo</span>
          <span className='col-md-2'>Video</span>
          <span className='col-md-3'>Tag People</span>
          <p className='col-md-5'>
            <Button
              className='new-class-submit-button'
              type='submit'
            >Post</Button>
          </p>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default NewClassForm;