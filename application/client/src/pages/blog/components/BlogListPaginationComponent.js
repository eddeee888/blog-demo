import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { A } from 'UI';
import { ContentRow } from 'PageWrappers';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
`;

const BlogListPaginationComponent = ({ goPrevious, goNext }) => (
  <ContentRow>
    <StyledWrapper>
      <A onClick={goPrevious}>Previous</A>
      <A onClick={goNext}>Next</A>
    </StyledWrapper>
  </ContentRow>
);

BlogListPaginationComponent.propTypes = {
  goPrevious: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
};

export default BlogListPaginationComponent;
