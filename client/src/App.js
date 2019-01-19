import React, { Component } from 'react';
import { Map_Component } from './components/map_component.js'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div class="column container">
        <header>
        </header>
        <div id="main-body" class="column container">
          <Map_Component></Map_Component>
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
