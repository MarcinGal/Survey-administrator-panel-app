import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

const style = {
    headline: {
        padding: "5px 12px 0",
        fontSize: "15px"
    },
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
        <div
            style={style.headline}
        >
            <h2>Lista pytań</h2>
        </div>
        <Paper>
            <TextField
                value={props.newQuestionText}
                onChange={props.onNewQuestionTextChangeHandler}
                hintText="Wpisz nazwę pytania"
                style={style.questionTextStyle}
            />
            <SelectField
                value={props.questionTypeValue}
                onChange={props.onNewQuestionTypeChangeHandler}
                style={style.questionTypeMenuStyle}
            >
                <MenuItem value="closed" primaryText={props.questionTypeClosed}></MenuItem>
                <MenuItem value="opened" primaryText={props.questionTypeOpened}></MenuItem>
            </SelectField>
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
