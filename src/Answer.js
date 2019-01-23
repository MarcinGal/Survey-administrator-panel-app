import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

const style = {
    radioButton: {
      marginBottom: "16px",
      marginLeft: "12px"
    },
    textField: {
      width: "90%",
      marginLeft: "12px"
    }
  }

const Answer = (props) => {

    switch (props.questionTypeValue) {
        case "closed":
            return (
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
            )
        case "opened":
            return (
                <TextField
                    hintText="Wpisz swoją odpowiedź"
                    multiLine={true}
                    rows={1}
                    rowsMax={10}
                    style={style.textField}
                >
                </TextField>
            )
        default:
            return
    }
}

export default Answer
