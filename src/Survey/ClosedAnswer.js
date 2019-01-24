import React from 'react'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

const style = {
    radioButton: {
        marginBottom: "16px",
        marginLeft: "12px"
    }
}

const ClosedAnswer = () => (
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

export default ClosedAnswer
