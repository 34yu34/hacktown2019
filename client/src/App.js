import React, { Component } from 'react';
import { Map_Component } from './components/map_component.js'
import { App_Module } from './App_Module.js'
import { Basic_Renderer } from './components/basic_renderer.js'
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props)
    App_Module.get_polyline_safe().then((polyline_service) => {
      polyline_service.add_line({ lat: 45, lng: -73 }, { lat: 50, lng: -60 }, true)
    })
  }

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
