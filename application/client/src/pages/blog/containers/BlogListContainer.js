import React, { PureComponent } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { ContentRow } from 'PageWrappers';
import BlogListComponent from '../components/BlogListComponent';
import BlogListPaginationComponent from '../components/BlogListPaginationComponent';

const perPage = 3;

class BlogListContainer extends PureComponent {
  static _flattenBlogData(data) {
    // we use this function to:
    // 1. flatten blog object so it's easier to use
    // 2. convert `blog.user` into `author` as it makes more sense as the relationship
    // 3. handle case where `blog.user` is NULL
    return data.map(blog => ({
      id: blog.id,
      title: blog.title,
      content: blog.content,
      createdAt: blog.created_at,
      authorId: blog.user ? blog.user.id : null,
      authorEmail: blog.user ? blog.user.username : null,
    }));
  }

  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      limit: perPage,
    };

    this._generateQuery = this._generateQuery.bind(this);
    this._goPrevious = this._goPrevious.bind(this);
    this._goNext = this._goNext.bind(this);
  }

  componentDidMount() {}

  _generateQuery() {
    const { offset, limit } = this.state;
    return gql`
    {
      allBlogs(offset: ${offset}, limit: ${limit}) {
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
    const query = this._generateQuery();
    return (
      <Query query={query}>
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
              <BlogListComponent blogs={this.constructor._flattenBlogData(data.allBlogs)} />
              <BlogListPaginationComponent goPrevious={this._goPrevious} goNext={this._goNext} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default BlogListContainer;
