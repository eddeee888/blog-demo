import ApolloClientBase from 'apollo-boost';
import { graphqlUrl } from 'Routes';

const ApolloClient = () => {
  const client = new ApolloClientBase({ uri: graphqlUrl });
  return client;
};

export default ApolloClient;
