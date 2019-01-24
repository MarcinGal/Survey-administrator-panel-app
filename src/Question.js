import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    marginTop: '40px'
  }
}

const Question = (props) => (
  <Paper
    style={style.paper}
  >
    <p>{props.question.questionText}</p>
  </Paper>
)

export default Question