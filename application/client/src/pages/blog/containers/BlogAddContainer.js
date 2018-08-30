import React, { PureComponent } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import BlogAddComponent from '../components/BlogAddComponent';

const ADD_BLOG_MUTATION = gql`
  mutation AddBlog($userId: ID!, $blogTitle: String, $blogContent: String) {
    addBlog(userId: $userId, blog: { title: $blogTitle, content: $blogContent }) {
      id
      title
      content
      created_at
    }
  }
`;

class BlogAddContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userId: '', // TODO: this should come from session
      blogTitle: '',
      blogContent: '',
      errorMessage: '',
      successMessage: '',
    };

    this._userIdOnChange = this._userIdOnChange.bind(this);
    this._blogTitleOnChange = this._blogTitleOnChange.bind(this);
    this._blogContentOnChange = this._blogContentOnChange.bind(this);
    this._resetForm = this._resetForm.bind(this);
    this._addBlogFormOnSubmit = this._addBlogFormOnSubmit.bind(this);
    this._setErrorMessage = this._setErrorMessage.bind(this);
    this._setSuccessMessage = this._setSuccessMessage.bind(this);
    this._addBlogOnCompleted = this._addBlogOnCompleted.bind(this);
    this._addBlogOnError = this._addBlogOnError.bind(this);
  }

  _userIdOnChange(e) {
    this.setState({
      userId: e.target.value,
    });
  }

  _blogTitleOnChange(e) {
    this.setState({
      blogTitle: e.target.value,
    });
  }

  _blogContentOnChange(e) {
    this.setState({
      blogContent: e.target.value,
    });
  }

  _setSuccessMessage(value) {
    this.setState({
      successMessage: value,
      errorMessage: '',
    });
  }

  _setErrorMessage(value) {
    this.setState({
      successMessage: '',
      errorMessage: value,
    });
  }

  _resetForm() {
    this.setState({
      blogTitle: '',
      blogContent: '',
    });
  }

  _addBlogFormOnSubmit(e, addBlog) {
    const { userId, blogTitle, blogContent } = this.state;
    e.preventDefault();
    addBlog({
      variables: {
        userId,
        blogTitle,
        blogContent,
      },
    });
  }

  _addBlogOnCompleted(data) {
    this._setSuccessMessage(`Successfully created blog with ID: ${data.addBlog.id}`);
    this._resetForm();
  }

  _addBlogOnError(error) {
    this._setErrorMessage(`Unable to create new blog! ${error}`);
  }

  render() {
    const { userId, blogTitle, blogContent, successMessage, errorMessage } = this.state;
    return (
      <Mutation
        mutation={ADD_BLOG_MUTATION}
        onError={this._addBlogOnError}
        onCompleted={this._addBlogOnCompleted}
      >
        {(addBlog, { loading }) => (
          <div>
            <form onSubmit={e => this._addBlogFormOnSubmit(e, addBlog)}>
              <BlogAddComponent
                userId={userId}
                blogTitle={blogTitle}
                blogContent={blogContent}
                userIdOnChange={this._userIdOnChange}
                blogTitleOnChange={this._blogTitleOnChange}
                blogContentOnChange={this._blogContentOnChange}
                loading={loading}
                successMessage={successMessage}
                errorMessage={errorMessage}
              />
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default BlogAddContainer;
