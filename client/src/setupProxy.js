// const proxy = require('http-proxy-middleware');
const SERVER_PORT = process.env.SERVER_PORT || 8080;
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    // app.use(createProxyMiddleware('/api', {target: `https://portafoglioreact.onrender.com:${SERVER_PORT}`} ))
    app.use(createProxyMiddleware('/api', {target: `http://localhost:${SERVER_PORT}`} ))
}

