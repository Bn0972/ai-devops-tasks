/**
 * Environment configuration settings
 * @type {Object}
 */
const ENV_CONFIGS = {
    development: {
      apiUrl: 'http://localhost:3000/api',
      debug: true,
      timeout: 5000
    },
    testing: {
      apiUrl: 'http://test-server:3000/api',
      debug: true,
      timeout: 5000
    },
    staging: {
      apiUrl: 'https://staging.example.com/api',
      debug: false,
      timeout: 10000
    },
    production: {
      apiUrl: 'https://api.example.com',
      debug: false,
      timeout: 15000
    }
  };
  
  /**
   * Default configuration to use when environment is not recognized
   * @type {Object}
   */
  const DEFAULT_CONFIG = ENV_CONFIGS.development;
  
  /**
   * Gets configuration settings for the specified environment
   * @param {string} env - The environment name ('development', 'testing', 'staging', 'production')
   * @returns {Object} Configuration object for the specified environment
   * @throws {Error} If environment is not a string
   */
  function getEnvironmentConfig(env) {
    if (typeof env !== 'string') {
      throw new Error('Environment must be a string');
    }
  
    const normalizedEnv = env.toLowerCase();
    return ENV_CONFIGS[normalizedEnv] || DEFAULT_CONFIG;
  }
  
  // Example usage:
  // const config = getEnvironmentConfig('development');
  // console.log(config.apiUrl); // 'http://localhost:3000/api'
  
  module.exports = {
    getEnvironmentConfig,
    ENV_CONFIGS,
    DEFAULT_CONFIG
  };