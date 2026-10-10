const http = require('http');
const marker = `<img src=x onerror="window.__CREATE_LOG_XSS_PROBE__=\'confirmed\';document.documentElement.dataset.createLogXss=\'confirmed\'">`;
console.log(marker);
const port = Number(process.env.PORT || 3000);
http.createServer((req, res) => { res.writeHead(200, {'content-type':'text/plain'}); res.end('owned probe running\n'); }).listen(port, '0.0.0.0', () => console.log(`probe-server-ready:${port}`));
