import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const style = {
  width: '100%',
  height: '100%'
};

const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
};


export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  displayMarkers = () => {
    return this.props.markers.coords.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.lat,
        lng: store.lng
      }}
      />
    })
  }

// TODO: Try to ajust the map
//   adjustMap(mapProps, map) {
//     const {google, markers} = mapProps;
//     const bounds = new google.maps.LatLngBounds();
  
//     markers.forEach(c => {
//       bounds.extend(new google.maps.LatLng(c.lat, c.lng));
//     });
  
//     // map.fitBounds(bounds);
//     // map.panToBounds(bounds);
//   }

  render() {
    return (
      <div style={{ height: '86vh', width: '100%' }}>
        <Map
          containerStyle={containerStyle}
          google={this.props.google}
          zoom={7}
          style={style}
          initialCenter={{ lat: -27.0922364, lng: -52.6166878 }}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

const LoadingContainer = (props) => <div>Carregando mapa!</div>;

export default GoogleApiWrapper({
  apiKey: '',
  LoadingContainer: LoadingContainer
})(MapContainer);