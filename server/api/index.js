import mercurius from 'mercurius';
import MercuriusValidation from 'mercurius-validation';
import schema from './graphql/index.js';

export default async function api(server) {
  server.register(mercurius, {
    path: '/graphql',
    schema,
  });

  await server.register(MercuriusValidation);

  // Example Graphql
  server.get('/example', async (request, reply) => {
    const { name } = request.query;

    const query = `{ hello(name: "${name}") }`;
    const { data } = await reply.graphql(query);
    return reply.send(data.hello);
  });

  server.get('/oauth/google/callback', async (request, reply) => {
    const { code } = request.query;
    const { toneapi } = request.server;

    const res = await toneapi.client.request({
      method: 'GET',
      path: '/api/v1/alivez',
    });

    console.log(res);
    // here we should catch the code and redirect to a page in the app
    // this page will catch the code and
    reply.redirect(`/login?code=${code}`);
  });
}
