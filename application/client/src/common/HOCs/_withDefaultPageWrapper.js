import React from 'react';
import {
  PageWrapper,
  HeaderWrapper,
  ContentWrapper,
  FooterWrapper,
  Header,
  Footer,
} from 'PageWrappers';

function withDefaultPageWrapper(WrappedComponent) {
  return props => (
    <PageWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <ContentWrapper>
        <WrappedComponent {...props} />
      </ContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageWrapper>
  );
}

export default withDefaultPageWrapper;
