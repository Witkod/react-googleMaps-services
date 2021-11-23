import React from 'react';
import styled from 'styled-components';

export default function ServiceTypeMenu({ enabledFilters, onFilterToggle }) {
  return (
    <UIServiceTypeMenu>
      <UITitle>Service Type</UITitle>
      <UIServiceType
        onClick={() => onFilterToggle('maintenance')}
        isFilteredType={enabledFilters.includes('maintenance')}
        color={'rgba(255,225,60)'}
      >
        Repair or maintenance
      </UIServiceType>
      <UIServiceType
        onClick={() => onFilterToggle('tires')}
        isFilteredType={enabledFilters.includes('tires')}
        color={'rgba(30,210,100,1)'}
      >
        Tires
      </UIServiceType>
      <UIServiceType
        onClick={() => onFilterToggle('windows')}
        isFilteredType={enabledFilters.includes('windows')}
        color={'rgba(250,50,20,1)'}
      >
        Glass breakage
      </UIServiceType>
    </UIServiceTypeMenu>
  );
}

const UIServiceTypeMenu = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 3rem;
  padding-right: 5rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgb(236, 236, 236);
  border-top: 1px solid rgb(236, 236, 236);
`;

const UIServiceType = styled.div`
  border-radius: 8px;
  border-style: solid;
  border-width: 2px;

  height: 52px;
  width: 200px;
  margin-bottom: 1rem;

  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-color: ${(props) => {
    if (props.isFilteredType) {
      return props.color;
    } else {
      return 'rgb(236, 236, 238)';
    }
  }};
`;

const UITitle = styled.div`
  line-height: 1.6rem;
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;
