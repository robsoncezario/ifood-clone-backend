import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import CategoryResolver from '../resolvers/Category/resolver';
import RestaurantResolver from '../resolvers/Restaurant/resolver';

(async () => {
  const schema = await buildSchema({
    resolvers: [ 
      CategoryResolver,
      RestaurantResolver
    ],
  });

  const server = new ApolloServer({schema});

  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
})();