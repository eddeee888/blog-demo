import ApolloClientBase from 'apollo-boost';
import { graphql as graphqlUrl } from 'Routes';

const ApolloClient = () => {
  const client = new ApolloClientBase({ uri: graphqlUrl });
  return client;
};

export default ApolloClient;
