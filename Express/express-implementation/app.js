const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const auth = require("basic-auth");

const app = express();
const PORT = 5000;

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:3000", 
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true 
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

const users = { admin: "password123" };

const authenticate = (req, res, next) => {
  const user = auth(req);
  if (!user || users[user.name] !== user.pass) {
    res.set("WWW-Authenticate", 'Basic realm="Restricted"');
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};


app.get("/data", (req, res) => {
  res.json({ message: "GET request successful!", data: "Sample Data" });
});

app.post("/data", (req, res) => {
  res.json({ message: "POST request received!", receivedData: req.body });
});

app.put("/data/:id", (req, res) => {
  res.json({ message: `PUT request successful! Updated ID: ${req.params.id}` });
});

app.delete("/data/:id", (req, res) => {
  res.json({ message: `DELETE request successful! Deleted ID: ${req.params.id}` });
});

app.get("/set-cookie", (req, res) => {
  res.cookie("userSession", "xyz123", { httpOnly: true, maxAge: 3600000 }); // 1 hour expiry
  res.json({ message: "Cookie set successfully!" });
});

app.get("/read-cookie", (req, res) => {
  const cookie = req.cookies.userSession;
  if (!cookie) {
    return res.status(400).json({ error: "No cookie found" });
  }
  res.json({ message: "Cookie found!", cookie });
});

app.get("/protected", authenticate, (req, res) => {
  res.json({ message: "You are authenticated!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
