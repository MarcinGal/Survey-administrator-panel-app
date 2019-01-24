import React from 'react';
import { ListItem } from 'material-ui/List'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton'

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
    <ListItem
    style={style.paper}
    primaryText={props.user.userName}
    rightIconButton={
      <IconButton>
        <DeleteIcon
          onClick={() => props.deleteUser(props.user.key)}
        />
      </IconButton>
    }
  >
  </ListItem>
)

export default User