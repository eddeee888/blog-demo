import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BlogViewContainer from '../containers/BlogViewContainer';

class BlogView extends PureComponent {
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
    return <BlogViewContainer id={id} />;
  }
}

BlogView.propTypes = {
  match: PropTypes.object,
};

BlogView.defaultProps = {
  match: null,
};

export default BlogView;
