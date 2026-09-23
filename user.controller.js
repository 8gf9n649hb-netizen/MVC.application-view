// controllers/user.controller.js
// CONTROLLER = the middleman. It receives the HTTP request (from Routes),
// asks the MODEL for data or to make a change, then picks which VIEW
// to render with that data. It has NO knowledge of HTML and NO direct
// knowledge of how data is stored — that's the Model's job.

const User = require("../models/user.model");

exports.listUsers = (req, res) => {
  const users = User.getAll();
  res.render("users/index", { users }); // renders views/users/index.ejs
};

exports.showCreateForm = (req, res) => {
  res.render("users/create");
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  User.create(name, email);
  res.redirect("/users");
};

exports.deleteUser = (req, res) => {
  User.delete(req.params.id);
  res.redirect("/users");
};
