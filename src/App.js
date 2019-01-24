import React from 'react'
import Survey from './Survey'
import AllUsers from './AllUsers'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Survey/>
        <AllUsers/>
      </div>
    );
  }
}

export default App;
