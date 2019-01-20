export class Polyline_Service {

  constructor(map, maps) {
    this.map = map
    this.maps = maps
    this.lines = []
    this.markers = []
  }

  add_line({pts1, pts2, can_park}) {
    let line = new this.maps.Polyline({
      path: [pts1, pts2],
      strokeColor: (can_park ? '#00FF00' : '#FF0000'),
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    line.setMap(this.map)
    this.lines.push(line)
  }

  add_marker({lat, lng, desc}) {
    let marker = new this.maps.Marker({
      position: {lat, lng},
      map: this.map,
      title: desc,
      text: 'wow'
    });
    this.markers.push(marker);
  }
}
