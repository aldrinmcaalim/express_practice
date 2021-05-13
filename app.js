const express = require("express");
const APP = express();
const PORT = 7000;
const PATH = require("path");
const postData = require("./data.json");

APP.use(express.static(PATH.join(__dirname, "public")));

APP.set("view engine", "ejs");
APP.set("views", PATH.join(__dirname, "/views"));

// HOME PAGE
APP.get("/", (req, res) => {
  res.send(`GET request on "/" on port ${PORT}`);
});

// POSTS PAGE
APP.get("/p/:subpost", (req, res) => {
  const { subpost } = req.params;
  const data = postData[subpost];
  if (data) {
    res.render("subpost", { ...data });
  }
  res.render("notfound", { subpost });
});

// PORT LISTENER
APP.listen(PORT, () => {
  console.log(`LISTENING ON PORT: ${PORT}`);
});
