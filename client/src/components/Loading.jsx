import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

// Customization info https://material-ui.com/components/skeleton/

const navStyle = {
  position: 'absolute',
  width: '100%',
  height: '10%',
};

const glanceStyle = {
  position: 'absolute',
  width: '20%',
  height: '50%',
  marginLeft: '10%',
  marginTop: '10%',
};

const feedStyle = {
  position: 'absolute',
  width: '35%',
  height: '70%',
  marginLeft: '40%',
  marginTop: '10%',
};

const Loading = (props) => {
  return (
    <React.Fragment>
      <Skeleton variant="rect" animation="wave" style={navStyle} />
      <Skeleton variant="rect" animation="wave" style={glanceStyle} />
      <Skeleton variant="rect" animation="wave" style={feedStyle} />
    </React.Fragment>
  )
}

export default Loading;