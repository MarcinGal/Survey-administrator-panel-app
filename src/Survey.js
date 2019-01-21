import React from 'react';
import AddQuestion from './AddQuestion'

class Survey extends React.Component {
    state = JSON.parse(localStorage.getItem('singleSurveyState'))
        ||
        {
            questions: [],
            newQuestionText: ''
        }

    componentDidUpdate() {
        this.saveInLocalStorage()
    }

    saveInLocalStorage = () => localStorage.setItem(
        'singleSurveyState',
        JSON.stringify(this.state)
    )

    createQuestion = text => ({
        questionText: text,
        key: Date.now()
    })

    addQuestion = () => this.setState({
        questions: this.state.questions.concat(
            this.createQuestion(
                this.state.newQuestionText
            )
        ),
        newQuestionText: ''
    })

    onNewQuestionTextChangeHandler = event => this.setState({ newQuestionText: event.target.value })

    render() {
        return (
            <div>
                Survey is here
            <AddQuestion
                    newQuestionText={this.state.newQuestionText}
                    onNewQuestionTextChangeHandler={this.onNewQuestionTextChangeHandler}
                    addQuestion={this.addQuestion}
                >
                </AddQuestion>
            </div>
        )
    }
}

export default Survey