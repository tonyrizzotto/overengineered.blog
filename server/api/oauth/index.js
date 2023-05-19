import ENV from '../../../config/index.js';

const {
  default: {
    toneapi,
  },
} = ENV;

function oauthHandler(server, options, next) {
  server.route({
    method: 'GET',
    url: '/oauth/google/callback',
    handler: async (request, reply) => {
      const { code } = request.query;

      /*
        The job here will be to send the code back to the server, to request the first
        access token and refresh token.
        After receiving, we should create an account if necessary, then return an access token.

        The access token will be returned to the `/login?token=access_token` page.
        This page will decode the token, save to local storage and attempt to redirect
        to the dashboard, where the token will have to be sent back to the server to request
        account data for an actual login session.
      */
      const { status } = await fetch(`${toneapi.baseUrl}/api/v1/oauth/google`)
        .then(async (response) => ({
          status: response.status,
          body: await response.json(),
        }));

      /*
        here we catch the token, in the server callback.
        Once we verify it's okay, we encode it with our signature and set the cookie
        before redirecting to the dashboard.
      */
      reply.setCookie('heytony', code, { secure: true, path: '/' }).redirect('/dashboard');
    },
  });

  next();
}

export default oauthHandler;
