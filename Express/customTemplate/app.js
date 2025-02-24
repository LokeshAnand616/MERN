const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const session = require("express-session");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const indexRoute = require("./routes/index");
const fileRead = require("./routes/fileRead");
const setCookie = require("./routes/setCookie");
const getCookie = require("./routes/getCookie");
const deleteCookie = require("./routes/deleteCookie");
const signedCookie = require("./routes/signedCookie");
const httpMethods = require("./routes/httpMethods");

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

app.use(morgan("tiny"));
app.use(helmet()); 
app.disable("x-powered-by");
app.use(compression());
app.use(cookieParser("superSecretKey"));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: "GET,POST,PUT,PATCH,DELETE",
    credentials: true, 
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(
  session({
    secret: "newKey",
    name: "newCookie",
    resave: true,
    saveUninitialized: true,
    rolling: true,
    unset: "destroy",
    cookie: {
      secure: false, 
      httpOnly: true,
      maxAge: 1000 * 60 * 15, 
      sameSite: "lax",
    },
  })
);

app.use("/", indexRoute);
app.use("/", fileRead);
app.use("/", setCookie);
app.use("/", getCookie);
app.use("/", deleteCookie);
app.use("/", signedCookie);
app.use("/api", httpMethods);

app.use((req, res) => {
  res.status(404).send("Sorry, the page you're looking for doesn't exist.");
});

app.use((err, req, res, next) => {
  console.error("Error occurred:", err.message);
  res.status(500).send("Something went wrong! Please try again later.");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
