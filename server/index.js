require('dotenv').config();
const { createServer } = require('http');
const axios = require('axios');
const url = require('url');

const HOSTNAME = '127.0.0.1';
const PORT = '8000';

const routing = {
  '/news': {
    url: 'https://content.guardianapis.com/search',
    apikey: process.env.GUARDIAN_API_KEY
  }
};

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const reqUrl = url.parse(req.url, true);
  const apiParams = routing[reqUrl.pathname];
  if (apiParams) {
    const { query = {} } = reqUrl;
    axios.get(apiParams.url, {
      params: {
        'api-key': apiParams.apikey,
        ...query
      }
    }).then(({ data }) => {
      res.end(JSON.stringify(data));
    }).catch(err => {
      console.log(err);
      res.end(JSON.stringify({}));
    });
  } else {
    res.end(JSON.stringify({}));
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});
