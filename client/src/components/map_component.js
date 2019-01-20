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
    this.state.paths = [
        {lat: 45.5760038372319, lng: -73.5668386028432},
        {lat: 45.5760132973046, lng: -73.5668644965631},
        {lat: 45.5441418663109, lng: -73.5676036744915},
        {lat: 45.5440905103725, lng: -73.5676379070403}
      ]
  }

  on_load_map(map, maps) {
    this.state.map = map
    this.state.maps = maps
    this.draw_poly_lines(this.state.paths[0],this.state.paths[1]);
    this.draw_poly_lines(this.state.paths[2],this.state.paths[3]);
  }

  draw_poly_lines(point1, point2){
    var b = new this.state.maps.Polyline({
      path: [point1, point2]
    });

    b.setMap(this.state.map);
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
