import React from 'react'
import Question from './Question'
import Answer from './Answer'

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
                        <Answer>
                        </Answer>
                    </Question>

                )
            )
        }
    </div>
)

export default QuestionsList