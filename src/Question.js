import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    margin: '1px 0',
    padding: '1px 0'
  },
  question: {
    margin: '12px'
  }
}

const Question = (props) => (
  <Paper
    style={style.paper}
  >
    <p
    style={style.question}
    >{props.question.questionText}</p>
  </Paper>
)

export default Question