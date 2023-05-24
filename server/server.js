import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import Fastify from 'fastify';
import FastifyVite from '@fastify/vite';
import fastifyCookie from '@fastify/cookie';
import { renderToString } from 'react-dom/server';
import { v4 } from 'uuid';
import api from './api/index.js';
import { loggingConfig, onRequestLogging, onResponseLogging } from './utils/index.js';

export default async function createServer({ environment }) {
  const server = Fastify({
    disableRequestLogging: true,
    ignoreTrailingSlash: true, // supports both trailing and none
    logger: loggingConfig[environment],
    requestIdHeader: 'X-Request-ID',
    requestIdLogLabel: 'requestId',
    genReqId: () => v4(),
  });

  // Register logging configuration
  server.addHook('onRequest', onRequestLogging);
  server.addHook('onResponse', onResponseLogging);

  server.register(fastifyCookie, {
    secret: 'my-secret',
  });

  // Register entire api
  server.register(api, {
    prefix: '/r',
  });

  // SSR w/Vite
  await server.register(FastifyVite, {
    dev: environment !== 'production',
    /*
      `root` is pulled from the vite.config.js. `path.join` is required as @fastify/vite expects
       your server to be in the root folder of the project, and not nested.
     */
    root: join(dirname(fileURLToPath(new URL(import.meta.url))), '../'),
    createRenderFunction({ createApp }) {
      return () => ({
        element: renderToString(createApp()),
      });
    },
  });

  /*
    Renders the application via SSR
  */
  server.get('/*', (request, reply) => {
    reply.html(reply.render());
  });

  return server;
}
