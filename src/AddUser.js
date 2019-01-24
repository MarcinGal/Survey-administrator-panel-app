import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    headline: {
       padding: "5px 12px 0",
        fontSize: "15px"
    },

    newUserNameStyle: {
        width: "80vw",
        marginLeft: "12px"
    },
    button: {
        margin: "12px",
        padding: "5px"
    }
}


const AddUser = (props) => (
        <Paper>
            <div
                style={style.headline}
            >
                <h2>Lista użytkowników</h2>
            </div>
            <TextField
                value={props.newUserName}
                onChange={props.onNewUserNameChangeHandler}
                hintText="Wpisz nazwę nowego użytkownika"
                style={style.newUserNameStyle}
            />
            <RaisedButton
                onClick={props.addUser}
                onChange={props.onNewUserNameChangeHandler}
                style={style.button}
            >Dodaj Użytkownika
            </RaisedButton>
        </Paper>
)

export default AddUser