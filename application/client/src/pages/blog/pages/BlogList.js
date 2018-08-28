import React from 'react';
import { ContentRow } from 'PageWrappers';
import { H1 } from 'UI';
import BlogListContainer from '../containers/BlogListContainer';

const BlogList = () => (
  <div>
    <ContentRow>
      <H1>All the hottest and latest blogs!</H1>
    </ContentRow>
    <BlogListContainer />
  </div>
);

export default BlogList;
