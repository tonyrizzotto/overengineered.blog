import * as dotenv from 'dotenv';

/*
  `dotenv` path should use the .env.NODE_ENV to separate app secrets by environment
 */
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export default ({
  environment: process.env.NODE_ENV,
  address: process.env.ADDRESS,
  port: process.env.PORT,
  // Client key is exported to the client AFTER build
  client: {
    isEnabled: process.env.IS_ENABLED === 'true',
    googleClientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
    googleRedirectUrl: process.env.GOOGLE_OAUTH_REDIRECT_URL,
  },
});
