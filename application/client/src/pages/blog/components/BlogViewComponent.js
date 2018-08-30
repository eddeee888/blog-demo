import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContentRow } from 'PageWrappers';
import { blog as blogUrl } from 'Routes'; // TODO: convert this to use real `blogEdit` variable and take id dynamically
import { H1, Link, Button } from 'UI';

const StyledSubHeading = styled.div`
  font-size: 0.7em;
  font-weight: 700;
`;

const StyledActionWrapper = styled.div`
  display: flex;
  margin-top: 1em;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const StyledEditButtonWrapper = styled.span`
  padding-left: 1em;
`;

const BlogViewComponent = ({ blog }) => (
  <ContentRow>
    <H1>{blog.title}</H1>
    <StyledSubHeading>
      by {blog.authorEmail} - {blog.createdAt}
    </StyledSubHeading>
    <p>{blog.content}</p>

    <StyledActionWrapper>
      <Link to={blogUrl} key="goBack">
        go back
      </Link>
      <StyledEditButtonWrapper>
        <Link to={`${blogUrl}/${blog.id}/edit`} key="editButton">
          <Button>edit</Button>
        </Link>
      </StyledEditButtonWrapper>
    </StyledActionWrapper>
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
