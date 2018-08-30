import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H2, Link } from 'UI';
import { borderColor, mainColor } from 'Styles/color';
import { ContentRow } from 'PageWrappers';
import { blog as blogUrl } from 'Routes'; // TODO: need to use `blogView` but replace :id dynamically

const StyledSubText = styled.div`
  font-size: 0.8em;
`;

const StyledBlockWrapper = styled.div`
  width: 100%;
  padding: 0.5em 0 1em 0;
  border-bottom: 1px solid ${borderColor};
  cursor: pointer;
  :hover {
    background-color: ${mainColor};
    color: white;
  }
`;

const BlogListComponent = ({ blogs }) =>
  blogs.map(blog => (
    <Link key={blog.id} to={`${blogUrl}/${blog.id}`} inheritTextColor>
      <StyledBlockWrapper>
        <ContentRow>
          <H2>{blog.title}</H2>
          <div>{blog.content}</div>
          <StyledSubText>
            <b>Author:</b>
            <span>{blog.authorEmail}</span>
          </StyledSubText>
          <StyledSubText>
            <b>Created on:</b>
            <span>{blog.createdAt}</span>
          </StyledSubText>
        </ContentRow>
      </StyledBlockWrapper>
    </Link>
  ));

BlogListComponent.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
      createdAt: PropTypes.string,
      authorId: PropTypes.string,
      authorEmail: PropTypes.string,
    })
  ),
};

export default BlogListComponent;
