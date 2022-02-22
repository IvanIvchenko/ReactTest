import React from 'react';
import ListScreen from "./screens/listScreen"

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <div className="listScreenWrapper">
            <ListScreen />
        </div>
      </div>
    );
  }
}

export default App;
