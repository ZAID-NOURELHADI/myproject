const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/marketing',
    createProxyMiddleware({
      target: 'http://api-marketing-test.inflexit.com',
      changeOrigin: true,
    })
  );
};