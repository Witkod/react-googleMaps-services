import React from 'react';
import styled from 'styled-components';


export default function ServiceTypeMenu(){

  return(
  <UIServiceTypeMenu>
    <UITitle>Service Type</UITitle>
    <UIServiceType>Diesel</UIServiceType>
    <UIServiceType>Elektrisch</UIServiceType>
    <UIServiceType>Glass breakage</UIServiceType>

  </UIServiceTypeMenu>);
};

const UIServiceTypeMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;

  
  padding-top: 3rem;
  padding-right: 5rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgb(236, 236, 236);
  border-top: 1px solid rgb(236, 236, 236);
`;

const UIServiceType = styled.div`
  border-radius: 8px;
  border-color: rgba(255,0,110,1);
  border-style: solid;
  border-width: 2px;
  
  height: 52px;
  width: 200px;
  margin-bottom: 1rem;
  

  font-weight: 400;
  font-size:1.2rem;
  line-height: 1;
  text-align: center;

  display:flex;
  flex-direction: column;
  justify-content: center;
  

`

const UITitle = styled.div`
  line-height: 1.6rem;
  font-weight: 600;
  font-size:1.4rem;
  margin-bottom: 1rem;
`