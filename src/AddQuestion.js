import React from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    questionTypeMenuStyle: {
        width: "80vw",
        textAlign: "center",
        marginLeft: "12px"
    },
    questionTextStyle: {
        width: "90vw",
        marginLeft: "12px"
    },
    button: {
        margin: "12px",
        padding: "5px"
    }
}


const AddQuestion = (props) => (
    <div>
        <Paper>
            <SelectField
                value={props.questionTypeValue}
                onChange={props.onNewQuestionTypeChangeHandler}
                style={style.questionTypeMenuStyle}
            >
                <MenuItem value="closed" primaryText={props.questionTypeClosed}></MenuItem>
                <MenuItem value="opened" primaryText={props.questionTypeOpened}></MenuItem>
            </SelectField>
            <TextField
                value={props.newQuestionText}
                onChange={props.onNewQuestionTextChangeHandler}
                hintText="Wpisz nazwę pytania"
                style={style.questionTextStyle}
            />
            <RaisedButton
                onClick={props.addQuestion}
                onChange={props.onNewQuestionTextChangeHandler}
                style={style.button}
            >Dodaj pytanie
            </RaisedButton>
        </Paper>
    </div>
)

export default AddQuestion