const express = require("express");
const app = express();
const port = 80;

app.use(express.static(__dirname));

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Sample app running on port ${port}`);
});
