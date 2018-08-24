import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { blog } from 'Routes';
import { withDefaultPageWrapper } from 'HOCs';
import { Page as PageLoadingPlaceholder } from 'LoadingPlaceholders';

const BlogListContainer = Loadable({
  loader: () => import('./containers/BlogListContainer'),
  loading: PageLoadingPlaceholder,
});

const App = () => (
  <Switch>
    <Route exact path={blog} component={BlogListContainer} />
  </Switch>
);

const WrappedApp = withDefaultPageWrapper(App);

export default WrappedApp;
