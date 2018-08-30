import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import {
  blog as blogUrl,
  blogView as blogViewUrl,
  blogEdit as blogEditUrl,
  blogAdd as blogAddUrl,
} from 'Routes';
import { withDefaultPageWrapper } from 'HOCs';
import { Page as PageLoadingPlaceholder } from 'LoadingPlaceholders';

const BlogList = Loadable({
  loader: () => import('./layouts/BlogList'),
  loading: PageLoadingPlaceholder,
});

const BlogView = Loadable({
  loader: () => import('./layouts/BlogView'),
  loading: PageLoadingPlaceholder,
});

const BlogEdit = Loadable({
  loader: () => import('./layouts/BlogEdit'),
  loading: PageLoadingPlaceholder,
});

const BlogAdd = Loadable({
  loader: () => import('./layouts/BlogAdd'),
  loading: PageLoadingPlaceholder,
});

const App = () => (
  <Switch>
    <Route exact path={blogUrl} component={BlogList} />
    <Route exact path={blogAddUrl} component={BlogAdd} />
    <Route exact path={blogEditUrl} component={BlogEdit} />
    <Route exact path={blogViewUrl} component={BlogView} />
    {<Route component={() => <div>404 Error</div>} />}
  </Switch>
);

const WrappedApp = withDefaultPageWrapper(App);

export default WrappedApp;
