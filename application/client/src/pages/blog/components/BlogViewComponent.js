import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContentRow } from 'PageWrappers';
import { H1 } from 'UI';

const StyledSubHeading = styled.div`
  font-size: 0.7em;
  font-weight: 700;
`;

const BlogViewComponent = ({ blog }) => (
  <ContentRow>
    <H1>{blog.title}</H1>
    <StyledSubHeading>
      by {blog.authorEmail} - {blog.createdAt}
    </StyledSubHeading>
    <p>{blog.content}</p>
  </ContentRow>
);

BlogViewComponent.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    authorId: PropTypes.string,
    authorEmail: PropTypes.string,
  }).isRequired,
};

export default BlogViewComponent;
