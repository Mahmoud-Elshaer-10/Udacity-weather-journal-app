// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require all dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Start up an instance of app
const app = express();
// declaring port
const port = 5000;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

// defining POST route endpoint
app.post("/postRoute", (req, res) => {
  // saving data received from client-side
  projectData = req.body;
  res.end();
});

// defining GET route endpoint
app.get("/getRoute", (req, res) => {
  res.send(projectData);
});
