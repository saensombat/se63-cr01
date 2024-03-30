
// * หน้านี้เป็นการเขียน react แบบ basic ยังไม่ได้มีการใช้ Hook

import React from 'react';
import './App.css';
import axios from 'axios';


type AppState = {
  message: String;
};


class App extends React.Component<{}, AppState> {
  state: AppState = {
    message: 'Default message',
  };


  componentDidMount() {
    axios.get('http://localhost:3888/courses')
      .then(res => res.data)
      .then(obj => {
        this.setState({ message: obj.message })
      })
  }


  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

export default App;
