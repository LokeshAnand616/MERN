const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan')
const helmet = require('helmet')
const session = require('express-session')
const compression = require('compression')

const app = express();
const indexRoute = require('./routes/index');
const fileRead = require('./routes/fileRead');
const setCookie = require('./routes/setCookie');
const getCookie = require('./routes/getCookie');

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
app.use(morgan('tiny'));
app.use(helmet());//adds security related headers
app.disable('x-powered-by'); 
app.use(compression())

app.use(session({
  secret:'newKey',
  name:'newCookie',
  resave:true,
  saveUninitialized:true,
  rolling:true,
  unset:'destroy',
  cookie:{
    secure:false,
    httpOnly:true,
    maxAge:1000*60*15,
    sameSite:'lax',
  }
}))


app.use('/',indexRoute);
app.use('/',fileRead);
app.use('/',setCookie);
app.use('/',getCookie);

app.use((err, req, res, next) => {
  console.error("Error Occurred:", err.message);
  
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    error: err.message || "Internal Server Error",
  });
});

// app.use((req, res, next) => {
//   const availableRoutes = app._router.stack
//     .filter((middleware) => middleware.route) // Get routes
//     .map((middleware) => middleware.route.path); // Extract paths

//   if (!availableRoutes.includes(req.path)) {
//     return res.status(404).json({ error: "Invalid route: " + req.path });
//   }
//   next();
// });

// Custom 404 handler (instead of default Express 404 page)
app.use((req, res) => {
  res.status(404).send("Sorry, the page you're looking for doesn't exist.");
});

// Custom error handler (instead of default Express error stack trace)
app.use((err, req, res, next) => {
  console.error("Error occurred:", err.message);
  res.status(500).send("Something went wrong! Please try again later.");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
