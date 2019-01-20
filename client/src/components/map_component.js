import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MAP_KEY from '../keys'
import './map_component.scss';

export class Map_Component extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.state.center = { lat: 45, lng: -75 }
    this.state.zoom = 11
    this.state.map = undefined
    this.state.maps = undefined
  }

  on_load_map(map, maps) {
    this.state.map = map
    this.state.maps = maps
  }

  render() {
    return (
      <div class="map-shower">
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAP_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.on_load_map(map, maps)}>
          <div lat={45} lng={-75} text="My Marker"></div>
        </GoogleMapReact>
      </div>
    );
  }
}
