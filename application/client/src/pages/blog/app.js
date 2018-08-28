import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { blog } from 'Routes';
import { withDefaultPageWrapper } from 'HOCs';
import { Page as PageLoadingPlaceholder } from 'LoadingPlaceholders';

const BlogList = Loadable({
  loader: () => import('./pages/BlogList'),
  loading: PageLoadingPlaceholder,
});

const App = () => (
  <Switch>
    <Route exact path={blog} component={BlogList} />
  </Switch>
);

const WrappedApp = withDefaultPageWrapper(App);

export default WrappedApp;
