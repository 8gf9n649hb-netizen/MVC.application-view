// server.js
// This is the entry point of the app. It wires together the MVC pieces.

const express = require("express");
const path = require("path");
const userRoutes = require("./routes/user.routes");

const app = express();
const PORT = 3000;

// Middleware to parse form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tell Express where our "Views" live and which template engine to use
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static files (CSS etc.)
app.use(express.static(path.join(__dirname, "public")));

// Routes decide which Controller function handles which URL
app.use("/users", userRoutes);

// Simple home route
app.get("/", (req, res) => {
  res.redirect("/users");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
