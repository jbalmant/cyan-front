import React, { useState, useEffect } from "react";
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


const Maps = (props) => {
  const { positions } = props
  const [bounds, setBounds] = useState(new window.google.maps.LatLngBounds())


  useEffect(() => {
    calculateBounds(positions);
  }, [positions]);

  const displayMarkers = () => {
    if (!positions) return;
    
    return props.positions.map((store, index) => {
      return <Marker key={index} id={index}
        position={{
          lat: store.lat,
          lng: store.lng
        }}
      />
    })
  }

  const calculateBounds = (positions) => {
    const bounds = new window.google.maps.LatLngBounds();

    if (!positions) return

    positions.forEach(p => {
      const { lat, lng } = p;
      const latLng = new window.google.maps.LatLng(lat, lng);
      bounds.extend(latLng);
    })
    setBounds(bounds)
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Map
        containerStyle={containerStyle}
        google={props.google}
        zoom={7}
        style={style}
        initialCenter={{ lat: -27.0922364, lng: -52.6166878 }}
        bounds={bounds}
        fullscreenControl={false}
      >
        {displayMarkers()}
      </Map>
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: ''
})(Maps);