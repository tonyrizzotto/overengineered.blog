export const ENV_QUERY = `
  query Env {
    getPublicEnvVars {
      isEnabled
      googleClientId
      googleRedirectUrl
    }
  }
`;

export default {
  ENV_QUERY,
};
