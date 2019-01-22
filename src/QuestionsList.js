import React from 'react'
import Question from './Question'

const QuestionsList = (props) => (
    <div>
        {
            props.questionsList &&
            props.questionsList.map &&
            props.questionsList.map(
                question => (
                    <Question
                    question={question}
                    >
                    </Question>
                )
            )
        }
    </div>
)

export default QuestionsList