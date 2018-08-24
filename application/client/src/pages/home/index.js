import React from 'react';
import { render } from 'react-dom';
import { H1 } from 'UI';
import { ContentRow } from 'PageWrappers';
import { withDefaultPageWrapper } from 'HOCs';

const HomePage = () => (
  <div>
    <ContentRow>
      <H1>Welcome to sample blog app</H1>
      <p>
        This project is built using docker with NGINX, PHP 7, Symfony 3, React 16 and GraphQL with
        Apollo
      </p>
    </ContentRow>
  </div>
);

const WrappedPage = withDefaultPageWrapper(HomePage);

render(<WrappedPage />, document.getElementById('reactRoot'));
