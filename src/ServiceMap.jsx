import React from 'react';
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api'
import mapStyles from './mapStyles';
import {IoMdLocate} from 'react-icons/io';
import styled from 'styled-components';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 50.58449,
  lng: 4.07093
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};

export default function ServiceMap({places}){
  const  {isLoaded, loadError} = useLoadScript({googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY });
  
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback( (map) => {mapRef.current = map;}, []);

  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat,lng});
    mapRef.current.setZoom(14);
 }, []);

  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading maps";



  return(
  <UIMapContainer>
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={8} options={options} onLoad={onMapLoad}>
      {places.map((place)=>(<Marker key={place.lat} icon={{
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        strokeColor: place.type,
        scale: 5
    }} position={{lat: place.lat, lng: place.lng}}/>))}
    </GoogleMap>
    <UILocate><Locate panTo={panTo}/></UILocate>
  </UIMapContainer>);
};

function Locate({panTo}){
  return(
      <button onClick={()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
          panTo({lat: position.coords.latitude, lng: position.coords.longitude})}, () => null)}}>
        <IoMdLocate color='rgba(255,0,110,1)' size='2em'/>
      </button>
  )
};

const UILocate = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  z-index: 10;
`

const UIMapContainer = styled.div`
  width:100%;
  height:100%;
  position: relative;
`

