export const ENV_QUERY = `
  query Env {
    getPublicEnvVars {
      isEnabled
      googleClientId
    }
  }
`;

export default {
  ENV_QUERY,
};
