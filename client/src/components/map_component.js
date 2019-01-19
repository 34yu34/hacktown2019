import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MAP_KEY from '../keys'

import './map_component.scss';


export class Map_Component extends Component {
  static defaultProps = {
    center: {
      lat: 45,
      lng: -75
    },
    zoom: 11
  };

  render() {
    return (
      <div class="map-shower">
        <GoogleMapReact bootstrapURLKeys={{ key: MAP_KEY }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <div lat={45} lng={-75} text="My Marker"></div>
        </GoogleMapReact>
      </div>
    );
  }
}
