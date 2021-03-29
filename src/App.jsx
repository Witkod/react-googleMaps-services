import React from 'react';
import {ServiceMap} from './ServiceMap';
import styled from 'styled-components';
import "./style.css"

import ServiceTypeMenu from "./ServiceTypeMenu"
import ServiceDetails from "./ServiceDetails";



export function App(){


  return(
    <UIMapSection>
      <UISidePanel>
        <ServiceTypeMenu/>
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
            <ServiceMap/>
          </UIMapBox>
          <UIMapFooter></UIMapFooter>
        </UIMapPanel>
      </UIMapPanelWrapper>
      
    </UIMapSection>);
};

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





