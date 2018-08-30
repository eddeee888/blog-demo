import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { ContentRow } from 'PageWrappers';

// NOTE: We have 2 ways to implement this:
// 1. Merge this container and blog view container to:
// use same graphql data and use an 'action' variable
// to toggle between 'view' or edit.
// 2. Split 2 containers here: we have to query again but
// User do NOT always go from view to edit,
// and in here we can specifically get just what we need
// Decision: 2 is easier to extend and less coupling, go with 2!

const GET_BLOG_QUERY = gql`
  query GetBlog($id: ID!) {
    blog(id: $id) {
      id
      title
      content
    }
  }
`;

const BlogEditContainer = ({ id }) => (
  <Query query={GET_BLOG_QUERY} variables={{ id }}>
    {({ data, loading, error }) => {
      if (loading) {
        return <ContentRow>Please wait while our monkeys manage the mess</ContentRow>;
      }
      if (error) {
        return <ContentRow>Error! Our monkeys returned with this note: {error.message}</ContentRow>;
      }
      return <div>TODO: BlogEditContainer for {data.blog.id}</div>;
    }}
  </Query>
);

BlogEditContainer.propTypes = {
  id: PropTypes.string,
};

BlogEditContainer.defaultProps = {
  id: null,
};

export default BlogEditContainer;
