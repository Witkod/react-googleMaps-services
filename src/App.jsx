import React from 'react';
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api'
import mapStyles from './mapStyles';

const mapContainerStyle = {
  width: '300px',
  height: '300px'
};

const center = {
  lat: 43.653225,
  lng: -79.3831886
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

export function App(){
  const  {isLoaded, loadError} = useLoadScript({googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY , libraries: ["places"]});
  
  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading maps";
  return(<div>
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={8} options={options}></GoogleMap>
  </div>);
}

