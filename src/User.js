import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    margin: '1px 0',
    padding: '1px 0'
  },
  usersNames: {
    margin: '12px'
  }
}

const User = (props) => (
  <Paper
    style={style.paper}
  >
    <p
    style={style.usersNames}
    >{props.user.userName}</p>
  </Paper>
)

export default User