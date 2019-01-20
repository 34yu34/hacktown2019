import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { App_Module } from '../App_Module'
import { Polyline_Service } from "../services/polyline_service"
import MAP_KEY from '../keys'
import './map_component.scss';

export class Map_Component extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.state.center = { lat: 45, lng: -75 }
    this.state.zoom = 11
    this.state.polyline_service = undefined
  }

  on_load_map(map, maps) {
    this.state.polyline_service = App_Module.set_polyline(new Polyline_Service(map, maps))
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
