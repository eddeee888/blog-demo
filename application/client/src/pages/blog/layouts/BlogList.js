import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ContentRow } from 'PageWrappers';
import { H1, Button } from 'UI';
import { blogAdd as blogAddUrl } from 'Routes';
import BlogListContainer from '../containers/BlogListContainer';

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlogList = () => (
  <div>
    <ContentRow>
      <StyledHeaderWrapper>
        <H1>All the hottest and latest blogs!</H1>
        <Link to={blogAddUrl}>
          <Button>Create blog</Button>
        </Link>
      </StyledHeaderWrapper>
    </ContentRow>
    <BlogListContainer />
  </div>
);

export default BlogList;
