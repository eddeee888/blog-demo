import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Page = () => <StyledWrapper>Loading...</StyledWrapper>;

export default Page;
