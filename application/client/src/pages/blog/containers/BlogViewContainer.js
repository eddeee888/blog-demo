import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { ContentRow } from 'PageWrappers';
import { flattenBlog } from 'EntityFunctions';
import { PageError404 as PageError404Url } from 'Routes';
import BlogViewComponent from '../components/BlogViewComponent';

const GET_BLOG_QUERY = gql`
  query GetBlog($id: ID!) {
    blog(id: $id) {
      id
      title
      content
      created_at
      user {
        id
        username
      }
    }
  }
`;

const BlogViewContainer = ({ id }) => (
  <Query query={GET_BLOG_QUERY} variables={{ id }}>
    {({ data, loading, error }) => {
      if (loading) {
        return <ContentRow>Please wait while our snails search for solutions...</ContentRow>;
      }
      if (error) {
        return <ContentRow>Error! Our snails returned with this note: {error.message}</ContentRow>;
      }

      const blogObject = flattenBlog(data.blog);
      // TODO If blogObject is null here, means data.blog is null meaning we cannot find the blog with this IP
      // In that case, we just send a 404
      if (!blogObject) {
        return <Redirect to={PageError404Url} />;
      }

      return <BlogViewComponent blog={blogObject} />;
    }}
  </Query>
);

BlogViewContainer.propTypes = {
  id: PropTypes.string,
};

BlogViewContainer.defaultProps = {
  id: null,
};

export default BlogViewContainer;
