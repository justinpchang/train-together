import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Row, Button } from 'react-bootstrap';
import Collapsible from 'react-collapsible';

/*
 * TODO: add preview form -> expanding
 */
const NewClassForm = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(Date.now());
  const [triggerStyle, setTriggerStyle] = React.useState({
    background: 'rgba(244, 215, 221, 0.3)'
  });
  
  const handleDateChange = (date) => {
    let event = {};
    event.target = {
      name: 'date',
      value: date,
    };
    props.handleChange(event);
    console.log(selectedDate);
  };

  const handleOpen = () => {
    setTriggerStyle({
      background: 'linear-gradient(to bottom, rgba(244, 215, 221, 0.3) 13%, white 0%)',
    });
  }

  const handleClose = () => {
    setTriggerStyle({
      background: 'rgba(244, 215, 221, 0.3)',
    });
  }

  return (
    <React.Fragment>
      <div className='new-class-form' style={triggerStyle}>
        <Collapsible
          trigger='Schedule a new workout'
          transitionTime={200}
          onOpen={handleOpen}
          onClose={handleClose}
        >
          <TextField
            label='Title'
            className='new-class-title'
            name='title'
            value={props.title}
            onChange={props.handleChange}
          />
          <TextField
            label='Description'
            className='new-class-description'
            multiline
            rows={3}
            name='description'
            value={props.description}
            onChange={props.handleChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date"
                format="MM/dd/yyyy"
                value={props.date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time"
                value={props.date}
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
                onClick={props.handleSubmit}
              >Post</Button>
            </p>
          </Row>
        </Collapsible>
        
      </div>
    </React.Fragment>
  )
}

export default NewClassForm;