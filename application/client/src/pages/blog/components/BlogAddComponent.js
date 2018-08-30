import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextField, SubmitButton, SuccessMessage, ErrorMessage, Link } from 'UI';
import { blog as blogUrl } from 'Routes';
import { ContentRow } from 'PageWrappers';

const StyledActionWrapper = styled.div`
  display: flex;
  margin-top: 1em;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const StyledSubmitButtonWrapper = styled.span`
  padding-left: 1em;
`;

const StyledNotificationWrapper = styled.div`
  margin-top: 1em;
`;

const BlogAddComponent = ({
  userId,
  blogTitle,
  blogContent,
  userIdOnChange,
  blogTitleOnChange,
  blogContentOnChange,
  loading,
  successMessage,
  errorMessage,
}) => (
  <ContentRow>
    <TextField value={userId} label="User ID" onChange={userIdOnChange} />
    <TextField value={blogTitle} label="Blog title" onChange={blogTitleOnChange} />
    <TextField value={blogContent} label="Blog content" onChange={blogContentOnChange} />

    {successMessage && (
      <StyledNotificationWrapper>
        <SuccessMessage>{successMessage}</SuccessMessage>{' '}
      </StyledNotificationWrapper>
    )}
    {errorMessage && (
      <StyledNotificationWrapper>
        <ErrorMessage>*{errorMessage}</ErrorMessage>
      </StyledNotificationWrapper>
    )}

    {!loading && (
      <StyledActionWrapper>
        <Link to={blogUrl} key="cancelAction">
          go back
        </Link>
        <StyledSubmitButtonWrapper key="submitAction">
          <SubmitButton>Create</SubmitButton>
        </StyledSubmitButtonWrapper>
      </StyledActionWrapper>
    )}
    {loading && (
      <StyledActionWrapper>
        <span>Please wait...</span>
      </StyledActionWrapper>
    )}
  </ContentRow>
);

BlogAddComponent.propTypes = {
  userId: PropTypes.string,
  blogTitle: PropTypes.string,
  blogContent: PropTypes.string,
  userIdOnChange: PropTypes.func.isRequired,
  blogTitleOnChange: PropTypes.func.isRequired,
  blogContentOnChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

BlogAddComponent.defaultProps = {
  userId: null,
  blogTitle: null,
  blogContent: null,
  loading: false,
  successMessage: null,
  errorMessage: null,
};

export default BlogAddComponent;
