const PROXY_CONFIG = [
    {
      context: ['/ms-votacao'],
      target: 'http://localhost:9098',
      secure: false,
      logLevel: 'debug',
     // pathRewrite: { '^/api': '' }
    }
  ];
  
  module.exports = PROXY_CONFIG;
