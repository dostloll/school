const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.end("Haloo I am under the water.");
});

app.listen(PORT, () => {
  console.log(`Listening from ${PORT}`);
});
