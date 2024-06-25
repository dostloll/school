const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Haloo I am under the water.");
});

app.get("/login", (req, res) => {
  console.log(req.body);
  res.send("This is Login page." + req.body);
});

app.listen(PORT, () => {
  console.log(`Listening from ${PORT}`);
});
