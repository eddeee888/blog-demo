import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { blog as blogUrl, blogView as blogViewUrl } from 'Routes';
import { withDefaultPageWrapper } from 'HOCs';
import { Page as PageLoadingPlaceholder } from 'LoadingPlaceholders';

const BlogList = Loadable({
  loader: () => import('./pages/BlogList'),
  loading: PageLoadingPlaceholder,
});

const blogView = Loadable({
  loader: () => import('./pages/BlogView'),
  loading: PageLoadingPlaceholder,
});

const App = () => (
  <Switch>
    <Route exact path={blogUrl} component={BlogList} />
    <Route path={`${blogViewUrl}/:id`} component={blogView} />
    <Route component={() => <div>404 Error</div>} />
  </Switch>
);

const WrappedApp = withDefaultPageWrapper(App);

export default WrappedApp;
