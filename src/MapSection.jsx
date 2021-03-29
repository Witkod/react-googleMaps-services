import React from 'react';
import ServiceTypeMenu from "./ServiceTypeMenu"
import ServiceDetails from "./ServiceDetails";
import ServiceMap from './ServiceMap';
import styled from 'styled-components';

export default function MapSection(){


    
  const [filterRepair, setFilterRepair] = React.useState(true);
  const [filterTires, setFilterTires] = React.useState(true);
  const [filterGlass, setFilterGlass] = React.useState(true);

  const toggleFilterRepair = (prevState) => {
    setFilterRepair(prevState => !prevState);
  }

  const toggleFilterTires = (prevState) => {
    setFilterTires(prevState => !prevState);
  }

  const toggleFilterGlass = (prevState) => {
    setFilterGlass(prevState => !prevState);
  }

  const places = [
    {lat: 50.58449, lng: 4.07093, type: "rgba(30,210,100,1)"},
    {lat: 50.62561, lng: 3.36836, type: "rgba(250,50,20,1)"},
    {lat: 50.67031308, lng: 5.54147431, type: "rgba(255,225,60)"}
  ]

  return(
    <UIMapSection>
      <UISidePanel>
        <ServiceTypeMenu 
        toggleFilterRepair={toggleFilterRepair} filterRepair={filterRepair}
        toggleFilterTires={toggleFilterTires} filterTires={filterTires}
        toggleFilterGlass={toggleFilterGlass} filterGlass={filterGlass}
        />
        <ServiceDetails/> 
      </UISidePanel>
      <UIMapPanelWrapper>
        <UISectionTitle>
        <h2>Find nearest service</h2>
        </UISectionTitle>
        <UIMapPanel>
          <UIMapHeader>
          </UIMapHeader>
          <UIMapBox>
            <ServiceMap places={places.filter(place=>{
              if(place.type==="rgba(255,225,60)" && filterRepair) return true;
              if(place.type==="rgba(30,210,100,1)"&& filterTires) return true;
              if(place.type==="rgba(250,50,20,1)" && filterGlass) return true;
            })}/>
          </UIMapBox>
          <UIMapFooter></UIMapFooter>
        </UIMapPanel>
      </UIMapPanelWrapper>
    </UIMapSection>);
}

const UIMapSection = styled.div`
  display: flex;
  width: 100vw;

  flex-wrap: wrap;
  margin-top: 3rem;
  padding: 5rem 0;
`;

const UISidePanel = styled.div`
  display: flex;
  flex-direction: column;


  min-width: 200px;
  padding: 0rem 1rem 3rem 3rem;
  background: rgb(255,255,255);
  border-right: 1px solid rgb(236, 236, 238);
`;
const UIMapPanelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  padding: 4rem 6rem;
  
  background: rgb(246, 246, 246);
`

const UIMapPanel = styled.div`

  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  background: rgb(255,255,255);
  min-width: 200px;

  border-radius: 10px;
  border: 0.1rem solid rgb(236, 236, 238);
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px;

`

const UIMapBox = styled.div`
  
  height: 400px;
`
const UIMapHeader = styled.div`

`
const UIMapFooter = styled.div`

`
const UISectionTitle = styled.div`
  font-size: 2.5rem;
  line-height: 4.8rem;
  font-weight: 700;
  padding: 0rem 6rem 4rem 0rem; 
`