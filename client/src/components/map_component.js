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
    this.state.center = { lat: 45.575, lng: -73.57 }
    this.state.zoom = 16
    this.state.map = undefined
    this.state.maps = undefined
    this.state.demo_paths = [
        {lat: 45.576315, lng: -73.567658, desc: "demo accessible"},
        {lat: 45.575113, lng: -73.564171, desc: "demo accessible"},
        {lat: 45.574943, lng: -73.564278, desc: "demo innaccessible"},
        {lat: 45.576171, lng: -73.567808, desc: "demo innaccessible"},
        {lat: 45.576171, lng: -73.567808, desc: "demo semi-innaccessible"},
        {lat: 45.575589, lng: -73.568291, desc: "demo semi-innaccessible"},
        {lat: 45.575589, lng: -73.568291, desc: "demo semi-semi-innaccessible"},
        {lat: 45.574407, lng: -73.564766, desc: "demo semi-semi-innaccessible"},
        {lat: 45.574943, lng: -73.564278, desc: "demo semi-semi-innaccessible"},
        {lat: 45.574407, lng: -73.564766, desc: "demo semi-semi-innaccessible"},
        {lat: 45.575544, lng: -73.563819, desc: "demo semi-semi-innaccessible"},
        {lat: 45.575101, lng: -73.564166, desc: "demo semi-semi-innaccessible"},
        {lat: 45.575544, lng: -73.563819, desc: "demo semi-innaccessible"},
        {lat: 45.576719, lng: -73.567363, desc: "demo semi-innaccessible"},
        {lat: 45.576719, lng: -73.567363, desc: "demo accessible"},
        {lat: 45.576303, lng: -73.567719, desc: "demo accessible"},
        {lat: 45.575499, lng: -73.568373, desc: "demo accessible"},
        {lat: 45.575142, lng: -73.567346, desc: "demo accessible"},
        {lat: 45.575142, lng: -73.567346, desc: "demo semi-semi-innaccessible"},
        {lat: 45.574736, lng: -73.566123, desc: "demo semi-semi-innaccessible"},
        {lat: 45.574736, lng: -73.566123, desc: "demo innaccessible"},
        {lat: 45.574315, lng: -73.564857, desc: "demo innaccessible"},
        {lat: 45.574315, lng: -73.564857, desc: "demo semi-innaccessible"},
        {lat: 45.573699, lng: -73.565340, desc: "demo semi-innaccessible"},
        {lat: 45.575499, lng: -73.568373, desc: "demo semi-innaccessible"},
        {lat: 45.574894, lng: -73.568827, desc: "demo semi-innaccessible"},
        {lat: 45.573699, lng: -73.565340, desc: "demo accessible"},
        {lat: 45.574894, lng: -73.568827, desc: "demo accessible"}
      ]
      this.state.demo_paneau = [
        {lat: 45.574304, lng: -73.567160, desc: "can always park"},
        {lat: 45.574736, lng: -73.566123, desc: "can't park from 8h00 to 18h00 on the left, can't park from 21h00 to 6h00 on the right"},
        {lat: 45.575243, lng: -73.568626, desc: "can't park from 16h00 to 3h00"},

      ]
    this.state.polyline_service = undefined
  }

  on_load_map(map, maps) {
    this.state.polyline_service = App_Module.set_polyline(new Polyline_Service(map, maps))
    this.state.map = map
    this.state.maps = maps
    for (let i = 0; i < this.state.demo_paths.length; i += 2) {
      this.draw_poly_lines(this.state.demo_paths[i], this.state.demo_paths[i + 1]);
    }
    let i = 0;
    while (i < this.state.demo_paneau.length) {
      this.state.polyline_service.add_marker(this.state.demo_paneau[i]);
      i++
    }
  }

  draw_poly_lines(point1, point2) {
    let color = '#FFFFFF';
    if (point1.desc === "demo innaccessible") color = '#FF0000';
    else if (point1.desc === "demo accessible") color = '#00FF00';
    else if (point1.desc === "demo semi-innaccessible") color = '#FFFF00';
    else if (point1.desc === "demo semi-semi-innaccessible") color = '#AAFF00';
    var b = new this.state.maps.Polyline({
      path: [point1, point2],
      strokeColor: color
    });

    b.setMap(this.state.polyline_service.map);
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
        </GoogleMapReact>
      </div>
    );
  }
}
