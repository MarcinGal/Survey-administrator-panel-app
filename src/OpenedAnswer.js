import React from 'react';
import TextField from 'material-ui/TextField';

const style = {
    textField: {
        width: "90%",
        marginLeft: "12px"
    }
}

const OpenedAnswer = (props) => (
    <TextField
        hintText="Wpisz swoją odpowiedź"
        multiLine={true}
        rows={1}
        rowsMax={10}
        style={style.textField}
    >
    </TextField>
)

export default OpenedAnswer
