import React, { Component } from 'react';
import './App.css';
import CleanTheRoom from './components/CleanTheRoom';
import AddTwoForTarget from './components/AddTwoForTarget';
import HexToRgb from './components/HextToRgb';

class App extends Component {
  render() {
    return (
      <div className="tc">
        <header className="bg-dark-blue white pa2">
          <h1 className="f2">Coding Challenge #6</h1>
          <h2>by <a className="light-green" href="https://github.com/zero-to-mastery">Zero-to-Mastery Community</a></h2>
        </header>
        <div className="bg-lightest-blue pa2 dark-pink">
        If you click buttons with input boxes left blank, a random array or code will be generated with its result.
        </div>
        <CleanTheRoom />
        <AddTwoForTarget />
        <HexToRgb />
        <footer className="pv4 ph3 ph5-m ph6-l white bg-mid-gray">
          <small className="f6 db tc">Created by <b className="ttu"><a className="white" href="https://github.com/polzak">Polzak</a></b></small>
        </footer>
      </div>
    );
  }
}

export default App;
