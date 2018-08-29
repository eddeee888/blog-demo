import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import { ContentRow } from 'PageWrappers';
import { flattenBlog } from 'EntityFunctions';
import { PageError404 as PageError404Url } from 'Routes';
import BlogViewComponent from '../components/BlogViewComponent';

class BlogViewContainer extends PureComponent {
  constructor(props) {
    super(props);

    this._generateQuery = this._generateQuery.bind(this);
  }

  _generateQuery() {
    const { id } = this.props;
    return gql`
    {
      blog(id: ${id}) {
        id
        title
        content
        created_at
        user {
          id
          username
        }
      }
    }`;
  }

  render() {
    const query = this._generateQuery();

    return (
      <Query query={query}>
        {({ data, loading, error }) => {
          if (loading) {
            return <ContentRow>Please wait while our snails search for sheets...</ContentRow>;
          }
          if (error) {
            return (
              <ContentRow>Error! Our snails returned with this note: {error.message}</ContentRow>
            );
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
  }
}

BlogViewContainer.propTypes = {
  id: PropTypes.string,
};

BlogViewContainer.defaultProps = {
  id: null,
};

export default BlogViewContainer;
