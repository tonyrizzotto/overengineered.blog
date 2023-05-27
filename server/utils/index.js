const defaultOpts = {
  messageKey: 'message',
  level: 'info',
  levelKey: 'severity',
  formatters: {
    level(label) {
      return { severity: label };
    },
  },
  serializers: {
    response: (reply) => ({
      statusCode: reply.statusCode,
      responseTime: reply.getResponseTime(),
    }),
  },
};

export const loggingConfig = {
  local: {
    ...defaultOpts,
    transport: {
      target: 'pino-pretty',
      options: {
        levelKey: 'severity',
        messageKey: 'message',
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
        colorize: true,
      },
    },
  },
  production: {
    ...defaultOpts,
  },
  test: false,
};

export function shouldNotLogOutput(url) {
  if (url.startsWith('/assets')
    || url.startsWith('/auth')
    || url.startsWith('/favicon')
    || url.startsWith('/articles/assets')
    || url.startsWith('/pages')
    || url.startsWith('/components')
    || url.startsWith('/contexts')
    || url.startsWith('/hooks')
    || url.startsWith('/posts')
    || url.startsWith('/queries')
    || url.startsWith('/routes')
    || url.startsWith('/theme')
    || url.startsWith('/utils')
    || url.startsWith('/@vite')
    || url.startsWith('/@react')
    || url.startsWith('/@fs')
    || url.startsWith('/@id')
    || url.startsWith('/App')
    || url.startsWith('/mount')
    || url.startsWith('/createApp')
  ) {
    return true;
  }
  return false;
}

export const onRequestLogging = async (request, reply) => {
  // In production, lets not log any request to the directories containing assets or src code
  if (shouldNotLogOutput(request.url)) {
    return;
  }
  request.log.info({
    message: `Request received: ${request.method} ${request.url}`,
    headers: request.headers,
    method: request.method,
    url: request.url,
  });
  reply.header('x-request-id', request.id);
};

export const onResponseLogging = async (request, reply) => {
  if (shouldNotLogOutput(request.url)) {
    return;
  }
  request.log.info({
    message: `Request Completed: ${request.method} ${request.url} ${reply.statusCode} ${Math.round(reply.getResponseTime())}ms`,
    headers: request.headers,
    method: request.method,
    url: request.url,
    response: reply,
  });
};
