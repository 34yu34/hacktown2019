import React, { Component } from 'react';

export class Basic_Renderer extends Component {
  constructor(props){
    super(props);
    this.state = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        this.setState({responseText: JSON.parse(xhttp.responseText).features[0].type});
        console.log(JSON.parse(xhttp.responseText).features[0]);
      }
    };
    xhttp.open("GET", "http://donnees.ville.montreal.qc.ca/dataset/8ac6dd33-b0d3-4eab-a334-5a6283eb7940/resource/52cecff0-2644-4258-a2d1-0c4b3b116117/download/signalisation.json", true);
    xhttp.send();
  }

  render() {
      return(
        <div></div>
      )
  }
}
