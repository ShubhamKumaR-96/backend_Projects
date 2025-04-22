const express = require("express");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  const repo = new CityRepository();
  repo.createCity({ name: "new delhi" });
});
