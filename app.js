const express = require("express");
const os = require("os");
const app = express();
const port = 80;

// Function to get private IPv4 address
function getPrivateIP() {
  const interfaces = os.networkInterfaces();
  for (let name of Object.keys(interfaces)) {
    for (let iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address; // Private IP
      }
    }
  }
  return "Private IP not found";
}

app.get("/", (req, res) => {
  const ip = getPrivateIP();
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>AWS CI/CD Demo</title>
      </head>
      <body>
        <h1>Hello from AWS CodePipeline + CodeDeploy + EC2! + Version FIVE</h1>
        <p>Server Private IP: ${ip}</p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Sample app running on port ${port}`);
});
