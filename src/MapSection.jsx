import React, { useEffect, useState } from 'react';
import ServiceTypeMenu from './ServiceTypeMenu';
import ServiceDetails from './ServiceDetails';
import ServiceMap from './ServiceMap';
import styled from 'styled-components';

function useFilters() {
  const [currentFilters, setCurrentFilters] = useState([]);

  function addFilter(filterName) {
    if (currentFilters.includes(filterName)) return;

    setCurrentFilters([...currentFilters, filterName]);
  }

  function removeFilter(filterName) {
    if (!currentFilters.includes(filterName)) return;

    const newFilters = removeElementFromArray(currentFilters, filterName);

    setCurrentFilters(newFilters);
  }

  function toggleFilter(filterName) {
    if (isFilterEnabled(filterName)) {
      removeFilter(filterName);
      return;
    }

    addFilter(filterName);
  }

  function isFilterEnabled(filterName) {
    return currentFilters.includes(filterName);
  }

  return {
    currentFilters,
    removeFilter,
    addFilter,
    toggleFilter,
    isFilterEnabled,
  };
}

function removeElementFromArray(array, element) {
  return array.filter((existingElement) => existingElement !== element);
}

export default function MapSection() {
  const filters = useFilters();

  const places = [
    { type: 'tires', lat: 50.58449, lng: 4.07093, color: 'rgba(30,210,100,1)' },
    {
      type: 'maintenance',
      lat: 50.62561,
      lng: 3.36836,
      color: 'rgba(250,50,20,1)',
    },
    {
      type: 'windows',
      lat: 50.67031308,
      lng: 5.54147431,
      color: 'rgba(255,225,60)',
    },
  ];

  const [is, setIs] = useState(false); // >> RAMx10001

  function toggleIs() {
    // 100001
    setIs((was) => !was);
  }

  useEffect(() => {
    const intervalNumber = setInterval(() => {
      toggleIs(); // 9001
    }, 2000);

    return () => {
      clearInterval(intervalNumber);
    };
  });

  return (
    <UIMapSection>
      <UISidePanel>
        <ServiceTypeMenu
          enabledFilters={filters.currentFilters}
          onFilterToggle={filters.toggleFilter}
        />
        <ServiceDetails />
      </UISidePanel>
      <UIMapPanelWrapper>
        <UISectionTitle>
          <h2>Find nearest service</h2>
        </UISectionTitle>
        <UIMapPanel>
          <UIMapHeader></UIMapHeader>
          <UIMapBox>
            <ServiceMap
              places={places.filter((place) => {
                return filters.isFilterEnabled(place.type);
              })}
            />
          </UIMapBox>
          <UIMapFooter></UIMapFooter>
        </UIMapPanel>
      </UIMapPanelWrapper>
    </UIMapSection>
  );
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
  background: rgb(255, 255, 255);
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
`;

const UIMapPanel = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 255);
  min-width: 200px;

  border-radius: 10px;
  border: 0.1rem solid rgb(236, 236, 238);
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px;
`;

const UIMapBox = styled.div`
  height: 400px;
`;
const UIMapHeader = styled.div``;
const UIMapFooter = styled.div``;
const UISectionTitle = styled.div`
  font-size: 2.5rem;
  line-height: 4.8rem;
  font-weight: 700;
  padding: 0rem 6rem 4rem 0rem;
`;
