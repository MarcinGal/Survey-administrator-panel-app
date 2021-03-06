import React from 'react'
import AddQuestion from './AddQuestion'
import QuestionsList from './QuestionsList'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

const style = {
    paper: {
        margin: "20px 2vw",
    },
    newSurveyNameStyle: {
        margin: "20px 12px 0",
        fontSize: "5vh",
        textAlign: "center",
        width: "80vw",
        lineHeight: "140%"
    }
}

class Survey extends React.Component {
    state = JSON.parse(localStorage.getItem('singleSurveyState'))
        ||
        {
            questions: [],
            newQuestionText: "",
            questionTypeValue: "closed",
            surveyName: ""
        }

    componentDidUpdate() {
        this.saveInLocalStorage()
    }

    saveInLocalStorage = () => localStorage.setItem(
        'singleSurveyState',
        JSON.stringify(this.state)
    )

    createQuestion = (text, type) => ({
        key: Date.now(),
        questionText: text,
        questionType: type
    })

    addQuestion = () => this.setState({
        questions: this.state.questions.concat(
            this.createQuestion(
                this.state.newQuestionText,
                this.state.questionTypeValue
            )
        ),
        newQuestionText: ''
    })

    onNewQuestionTypeChangeHandler = (event, index, value) => this.setState({
        questionTypeValue: value
    });

    onNewQuestionTextChangeHandler = event => this.setState({ newQuestionText: event.target.value })

    onNewSurveyNameChangeHandler = surveyName => this.setState({ surveyName: surveyName.target.value })

    questionsList = () => this.state.filter(question => question.questionText)

    deleteQuestion = questionKey => this.setState({
        questions: this.state.questions.filter(
            question => question.key !== questionKey
        )
    })

    render() {
        return (
            <Paper
                style={style.paper}
            >
                <TextField
                    hintText="Wpisz nazwę ankiety"
                    onChange={this.onNewSurveyNameChangeHandler}
                    style={style.newSurveyNameStyle}
                    multiLine={true}
                    value={this.state.surveyName}
                />
                <AddQuestion
                    newQuestionText={this.state.newQuestionText}
                    onNewQuestionTextChangeHandler={this.onNewQuestionTextChangeHandler}
                    addQuestion={this.addQuestion}
                    onNewQuestionTypeChangeHandler={this.onNewQuestionTypeChangeHandler}
                    questionTypeValue={this.state.questionTypeValue}
                    questionTypeClosed="Pytanie zamknięte"
                    questionTypeOpened="Pytanie otwarte"
                >
                </AddQuestion>
                <QuestionsList
                    questionsList={this.state.questions}
                    questionText={this.questionText}
                    actualQuestionTypeValue={this.state.questionTypeValue}
                    newQuestionText={this.state.newQuestionText}
                    deleteQuestion={this.deleteQuestion}
                >
                </QuestionsList>
            </Paper>
        )
    }
}

export default Survey
