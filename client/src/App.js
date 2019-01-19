import React, { Component } from 'react';
import { Map_Component } from './components/map_component.js'
import { Basic_Renderer } from './components/basic_renderer.js'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div class="column container">
        <header>
        </header>
        <div id="main-body" class="column container">
          <Map_Component></Map_Component>
          <Basic_Renderer></Basic_Renderer>
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
