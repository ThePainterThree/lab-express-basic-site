const express = require('express');
const app = express();
const port = 4000
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.send("Welcome");
  });

  app.get("/about", (req, res) => {
    res.send("About");
  });

  app.get("/works", (req, res) => {
    res.send("Works");
  });

  app.get("/gallery", (req, res) => {
    res.send("Gallery");
  });

  app.listen(port, () => console.log(`App is listening to the port ${port}`));