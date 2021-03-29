import React from 'react';
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api'
import mapStyles from './mapStyles';
import {IoMdLocate} from 'react-icons/io';
import styled from 'styled-components';

const libraries =  ["places"];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 43.653225,
  lng: -79.3831886
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};

export function ServiceMap(){
  const  {isLoaded, loadError} = useLoadScript({googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY , libraries: libraries});
  
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
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={8} options={options} onLoad={onMapLoad}></GoogleMap>
    <Locate panTo={panTo}/>
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


const UIMapContainer = styled.div`
  width:100%;
  height:100%;
`

