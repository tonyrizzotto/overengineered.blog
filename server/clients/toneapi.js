import { Client } from 'undici';
import ENV from '../../config/index.js';

const {
  default: {
    toneApi: {
      baseUrl,
    },
  },
} = ENV;

function toneAPIClient() {
  const client = new Client(baseUrl);

  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': 'overengineered-blog',
  };

  return { client, headers };
}

export default toneAPIClient;
