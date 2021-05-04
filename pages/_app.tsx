import './styles/app.css';
import { withApollo } from '../lib/apollo';
import { ApolloProvider } from '@apollo/client';
import { StoreProvider } from '../store/StoreProvider';
import Head from 'next/head';

function MyApp({ Component, pageProps, apolloClient }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        {/*<meta name="viewport" content="viewport-fit=cover" />*/}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
          key="viewport-meta"
        />
      </Head>
      <StoreProvider {...pageProps}>
        <ApolloProvider client={apolloClient}>
          {getLayout(<Component {...pageProps} />)}
        </ApolloProvider>
      </StoreProvider>
    </>
  );
}

export default withApollo(MyApp);
