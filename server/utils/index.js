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

export function onReponseLoggingConfig(request, reply) {
  const { method, url } = request.raw;
  const { statusCode, getResponseTime } = reply;

  const responseTime = Math.round(getResponseTime());
  request.log.info({
    message: `Response ${method} ${url} ${statusCode} ${responseTime}`,
    method,
    url,
    statusCode,
    responseTime,
  });
}

export function shouldNotLogOutput(url) {
  if (url.startsWith('/assets')
    || url.startsWith('/auth')
    || url.startsWith('/favicon')
    || url.startsWith('/Pages')
    || url.startsWith('/components')
    || url.startsWith('/contexts')
    || url.startsWith('/hooks')
    || url.startsWith('/posts')
    || url.startsWith('/queries')
    || url.startsWith('/Routes')
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
