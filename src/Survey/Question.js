import React from 'react'
import { ListItem } from 'material-ui/List'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton'

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
  <ListItem
    style={style.paper}
    primaryText={props.question.questionText}
    rightIconButton={
      <IconButton>
        <DeleteIcon
          onClick={() => props.deleteQuestion(props.question.key)}
        />
      </IconButton>
    }
  >
  </ListItem>
)

export default Question
