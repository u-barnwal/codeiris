import './styles/app.css';
import { withApollo } from '../lib/apollo';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps, apolloClient }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ApolloProvider client={apolloClient}>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  );
}

export default withApollo(MyApp);
