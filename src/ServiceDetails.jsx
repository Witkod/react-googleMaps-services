import React from "react";
import styled from "styled-components";

export default function ServiceDetails({Brand, City, Adress, tel}){

  return(
  <UIDetailsSection>
    <UITitle>Details</UITitle>
    <UIDetails>
      <UIInfo>Brand: Auto5</UIInfo>
      <UIInfo>City: Mechelen</UIInfo>
      <UIInfo>Address: Zembastbaan</UIInfo>
    </UIDetails>
  </UIDetailsSection>)
}

const UIDetailsSection = styled.div`
  display: flex;
  flex-direction: column;


  min-width: 200px;

  padding-bottom: 1rem;
  border-bottom: 1px solid rgb(236, 236, 236);
`
const UIDetails = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  border-color: rgba(255,0,110,1);
  border-style: solid;
  border-width: 2px;

  font-weight: 400;
  font-size:1.2rem;
  line-height: 1;
  text-align: center;

  width: 160px;
  padding: 2rem;
`

const UIInfo = styled.div`
  height: 20px;
  margin-bottom: 1rem;

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