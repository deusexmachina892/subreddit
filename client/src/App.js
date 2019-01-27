import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SelectorContainer from './containers/SelectorContainer';
import PostContainer from './containers/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SelectorContainer />
        <PostContainer />
      </div>
    );
  }
}

export default App;
