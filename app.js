const express = require('express');
const app = express();
const port = 4000

//app.use(express.static('public'));

app.get("/", (req, res) => {
    response.send("Welcome");
  });


  app.get("/about", (req, res) => {
    response.send("About");
  });
