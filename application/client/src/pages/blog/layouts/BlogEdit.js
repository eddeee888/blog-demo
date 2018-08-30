import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BlogEditContainer from '../containers/BlogEditContainer';

class BlogEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    this.setState({
      id: params.id,
    });
  }

  render() {
    const { id } = this.state;
    return <BlogEditContainer id={id} />;
  }
}

BlogEdit.propTypes = {
  match: PropTypes.object,
};

BlogEdit.defaultProps = {
  match: null,
};

export default BlogEdit;
