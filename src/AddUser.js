import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    newUserNameStyle: {
        width: "90vw",
        marginLeft: "12px"
    },
    button: {
        margin: "12px",
        padding: "5px"
    }
}


const AddUser = (props) => (
    <div>
        <Paper>
            <TextField
                value={props.newUserName}
                onChange={props.onNewUserNameChangeHandler}
                hintText="Wpisz nazwę użytkownika"
                style={style.newUserNameStyle}
            />
            <RaisedButton
                onClick={props.addUser}
                onChange={props.onNewUserNameChangeHandler}
                style={style.button}
            >Dodaj Użytkownika
            </RaisedButton>
        </Paper>
    </div>
)

export default AddUser