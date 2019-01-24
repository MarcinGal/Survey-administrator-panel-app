import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    marginTop: '5px',
    padding: '2px'
  }
}

const User = (props) => (
  <Paper
    style={style.paper}
  >
    <p>{props.user.userName}</p>
  </Paper>
)

export default User