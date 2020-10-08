const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

fs.readdir(path.join(__dirname, '../dist'), (err, files) => {
  if (err) { throw err; }
  const fileArray = files.filter((file) => file !== 'index.html');

  app.get('*', (req, res) => {
    // let path = req.query;
    // console.log(req.query);
    // res.sendFile()

    const route = req.params['0'].substring(0, req.params['0'].indexOf('/')); // Get the route from the request.

    if (fileArray.includes(route)) {
      // If the first part of the route is in the files array its
      // either a file or a folder, we try to send them the file in the
      // code below.

      // Set the route path to a variable.
      // P.S. We don't have to worry about traversal with '../', this
      // is taken care of automatically when using join.
      const tempFilePath = path.join(
        __dirname, `../dist/${req.params['0']}`,
      ); // Set the file path

      // Check if file exists. If it does send the file, otherwise send
      // a 404 and console.log an error.
      fs.access(tempFilePath, fs.F_OK, (fsErr) => {
        if (fsErr) {
          console.error(fsErr);
          res.statusCode = 404;
          res.end('Not Found');
        } else {
          res.sendFile(tempFilePath);
        }
      });
    } else {
      // Otherwise its a route in the React website.
      res.sendFile(
        path.join(__dirname, '../dist/index.html'),
      );
    }
  });
});

app.listen(8080);
