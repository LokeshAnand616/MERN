const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const indexRoute = require('./routes/index');
const fileRead = require('./routes/fileRead');

app.engine("e-view", (filePath, options, callback) => {
  fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) return callback(err);

    let rendered = content
      .replace("#title#", `<title>${options.title}</title>`)
      .replace("#message#", `<h1>${options.message}</h1>`);

    return callback(null, rendered);
  });
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "e-view");
app.use('/',indexRoute);
app.use('/',fileRead);

app.use((err, req, res, next) => {
  console.error("Error Occurred:", err.message);
  
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    error: err.message || "Internal Server Error",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
