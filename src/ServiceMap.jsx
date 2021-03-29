import React from 'react';
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api'
import mapStyles from './mapStyles';
import {IoMdLocate} from 'react-icons/io';
import styled from 'styled-components';

const places = [
  {lat: 50.58449, lng: 4.07093, type: "rgba(255,0,110,1)"},
  {lat: 50.62561, lng: 3.36836, type: "rgba(250,50,20,1)"},
  {lat: 50.67031308, lng: 5.54147431, type: "rgba(255,225,60)"}
]

const libraries =  ["places"];

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
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={8} options={options} onLoad={onMapLoad}>
      {places.map((place)=>(<Marker key={place.lat} icon={{
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        strokeColor: place.type,
        scale: 5
    }} position={{lat: place.lat, lng: place.lng}}/>))}
    </GoogleMap>
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

