import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import '../styles/nprogress.css';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

interface PagePropsWithApollo extends AppProps {
  apollo: ApolloClient<object>;
}

function App({
  Component,
  pageProps,
  apollo,
}: PagePropsWithApollo): JSX.Element {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

// Glue code for Apollo -> Nextjs
// @ts-ignore
App.getInitialProps = async function ({ Component, ctx }): Promise<Object> {
  let pageProps = {
    query: undefined,
  };

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

// @ts-ignore
export default withData(App);
