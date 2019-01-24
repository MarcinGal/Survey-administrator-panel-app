import React from 'react'
import Question from './Question'
import ClosedAnswer from './ClosedAnswer'
import OpenedAnswer from './OpenedAnswer'
import Paper from 'material-ui/Paper';

const QuestionsList = (props) => (
    <Paper>
        {
            props.questionsList &&
            props.questionsList.map &&
            props.questionsList.map(
                question => {
                    switch (props.actualQuestionTypeValue) {
                        case "closed":
                            return (
                                <Paper
                                    question={question}
                                >
                                    <Question
                                        question={question}
                                        questionsList={props.questionsList}
                                    />
                                    <ClosedAnswer
                                    />
                                </Paper>
                            )
                        case "opened":
                            return (
                                <Paper>
                                    <Question
                                        question={question}
                                        questionsList={props.questionsList}
                                    />
                                    <OpenedAnswer />
                                </Paper>
                            )
                        default:
                            return (
                                <Paper>
                                    <Question
                                        question={question}
                                        questionsList={props.questionsList}
                                    />
                                    <OpenedAnswer />
                                </Paper>
                            )
                    }
                }
            )
        }
    </Paper>
)

export default QuestionsList