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

const Answer = (props) => (
    <div> {
        props.questions.filter(question => {
            switch (question.questionTypeValue) {
                case "closed":
                    return (
                      console.log('closed')
                    )
                case "opened":
                    return (
                      console.log('opened')
                    )
                default:
                    return (
                        console.log('default')
                    )
            }
        }
        )
    }
    </div>
        )
    
    export default Answer
