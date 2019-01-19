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

  constructor(props){
    super(props);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
         console.log(xhttp.responseText);
      }
    };
    xhttp.open("GET", "http://donnees.ville.montreal.qc.ca/dataset/8ac6dd33-b0d3-4eab-a334-5a6283eb7940/resource/52cecff0-2644-4258-a2d1-0c4b3b116117/download/signalisation.json", true);
    xhttp.send();
  }

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
