import React from 'react'

const AddQuestion = (props) => (
    <div>
        <input
            value={props.newQuestionText}
            onChange={props.onNewQuestionTextChangeHandler}
        />
        <button
            onClick={props.addQuestion}
            onChange={props.onNewQuestionTextChangeHandler}
        >Add Question
        </button>
    </div>
)

export default AddQuestion