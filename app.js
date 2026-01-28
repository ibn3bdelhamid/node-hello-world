const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    "Hello World from Jenkins CI/CD , this is a change after webhook test🚀",
  );
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
