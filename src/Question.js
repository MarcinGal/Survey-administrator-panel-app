import React from 'react';
import Paper from 'material-ui/Paper';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

const style = {
  paper: {
    marginTop: '40px'
  },
  radioButton: {
    marginBottom: "16px",
    marginLeft: "12px"
  },
  textField: {
    width: "90%",
    marginLeft: "12px"
  }
}

const Question = (props) => (
  <Paper
    style={style.paper}
  >
    <p>{props.question.questionText}</p>
    <RadioButtonGroup name="closedQuestionAnswer" defaultSelected="Yes">
      <RadioButton
        value="Yes"
        label="Tak"
        style={style.radioButton}
      />
      <RadioButton
        value="No"
        label="Nie"
        style={style.radioButton}
      />
    </RadioButtonGroup>

    <TextField
      hintText="Wpisz swoją odpowiedź"
      multiLine={true}
      rows={1}
      rowsMax={10}
      style={style.textField}
    >
    </TextField>

  </Paper>
)

export default Question