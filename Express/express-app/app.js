const express = require("express");
const app = express();
const path = require("path");
const usersRoutes = require("./routes/users");
const logger = require("./middleware/logger");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(logger);

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/users", usersRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
