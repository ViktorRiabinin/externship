const express = require('express');
const path = require('path');
const url = require('url');
const proxy = require('express-http-proxy');

// New hostname+path as specified by question:
const apiProxy = proxy('https://exadel3team.myapptechka.by/', {
  proxyReqPathResolver: req => url.parse(req.originalUrl).path
});

const app = express();
app.use(express.static(path.join(__dirname, 'dist', 'exadel-lerning-front')));
app.use('/account/*', apiProxy);
app.use('/admin/*', apiProxy);
app.use('/api*', apiProxy);
app.use('/directory*', apiProxy);

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname, 'dist', 'exadel-lerning-front/index.html'));
});

app.listen(process.env.PORT || 80);
