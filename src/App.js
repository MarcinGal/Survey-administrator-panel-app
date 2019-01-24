import React from 'react'
import Survey from './Survey/Survey'
import AllUsers from './Users/AllUsers'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Survey />
        <AllUsers />
      </div>
    )
  }
}

export default App;
