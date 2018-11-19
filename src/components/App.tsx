import * as React from 'react'
import AddNote from '../containers/AddNote'
import Notes from '../containers/Notes'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Notes Manager</h1>
        <AddNote />
        <Notes />
      </div>
    );
  }
}

export default App;
