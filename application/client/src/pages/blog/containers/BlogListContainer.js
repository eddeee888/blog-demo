import React, { PureComponent } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { ContentRow } from 'PageWrappers';
import { flattenBlog } from 'EntityFunctions';
import BlogListComponent from '../components/BlogListComponent';
import BlogListPaginationComponent from '../components/BlogListPaginationComponent';

const perPage = 3;

const QUERY_ALL_BLOG = gql`
  query AllBlog($offset: Int!, $limit: Int!) {
    allBlogs(offset: $offset, limit: $limit) {
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

class BlogListContainer extends PureComponent {
  static _flattenAllBlogs(data) {
    // we use this function to:
    // 1. flatten blog object so it's easier to use
    // 2. convert `blog.user` into `author` as it makes more sense as the relationship
    // 3. handle case where `blog.user` is NULL
    return data.map(blog => flattenBlog(blog));
  }

  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      limit: perPage,
    };

    this._goPrevious = this._goPrevious.bind(this);
    this._goNext = this._goNext.bind(this);
  }

  _goPrevious() {
    const { offset } = this.state;
    let result = offset;

    const newOffset = offset - perPage;
    if (newOffset >= 0) {
      result = newOffset;
    }

    this.setState({
      offset: result,
    });
  }

  _goNext() {
    // NOTE: in here we are NOT checking for hasNext. We should implement this
    const { offset } = this.state;
    let result = offset;

    result = offset + perPage;

    this.setState({
      offset: result,
    });
  }

  render() {
    const { offset, limit } = this.state;
    return (
      <Query query={QUERY_ALL_BLOG} variables={{ offset, limit }} pollInterval={500}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <ContentRow>Please wait while our racoons rampage through records...</ContentRow>
            );
          }
          if (error) {
            return (
              <ContentRow>Error! Our racoons returned with this note: {error.message}</ContentRow>
            );
          }

          return (
            <div>
              <BlogListComponent blogs={this.constructor._flattenAllBlogs(data.allBlogs)} />
              <BlogListPaginationComponent goPrevious={this._goPrevious} goNext={this._goNext} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default BlogListContainer;
