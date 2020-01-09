//Part of core module
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  //request and response
  //console.log(req.headers);

  console.log('request for ' + req.url + 'by method ' + req.method);

  if (req.method == 'GET') {
    var fileURL;
    if (req.url == '/') {
      fileURL = '/index.html';
    } else {
      fileURL = req.url;
    }

    var filePath = path.resolve('./public' + fileURL);

    const fileExt = path.extname(filePath);

    if (fileExt == '.html') {
      fs.exists(filePath, exists => {
        if (!exists) {
          res.statusCode = 404; //404 or 400 means connection unsuccessful
          res.setHeader('Content-Type', 'text/html');
          res.end(
            '<html> <body><h1>Error 404: ' +
              fileURL +
              ' does not exist</h1></body></html>'
          );
        }

        res.statusCode = 200; //404 or 400 means connection unsuccessful
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(filePath).pipe(res); //Important.  Convert big file in streams of byte and provide response by passing through pipe one by one
      });
    } else {
      res.statusCode = 404; //404 or 400 means connection unsuccessful
      res.setHeader('Content-Type', 'text/html');
      res.end(
        '<html> <body><h1>Error 404: ' +
          fileURL +
          ' not an HTML file</h1></body></html>'
      );
    }
  } else {
    res.statusCode = 404; //404 or 400 means connection unsuccessful
    res.setHeader('Content-Type', 'text/html');
    res.end(
      '<html> <body><h1>Error 404: ' +
        fileURL +
        ' not supported</h1></body></html>' //Allowing only GET method request files
    );
  }

  //   res.statusCode = 200; //404 or 400 means connection unsuccessful
  //   res.setHeader('Content-Type', 'text/html');
  //   res.end('<html> <body><h1>Server connection success</h1></body></html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

//write ("start": "node index") under script in package.json
