import React from 'react'
import User from './User'
import Paper from 'material-ui/Paper';

const UsersList = (props) => (
    <Paper>
        {
            props.usersList &&
            props.usersList.map &&
            props.usersList.map(
                user => (
                    <User
                        user={user}
                        deleteUser={props.deleteUser}
                    />
                )
            )
        }
    </Paper>
)

export default UsersList
