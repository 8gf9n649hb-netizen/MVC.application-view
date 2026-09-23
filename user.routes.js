// routes/user.routes.js
// ROUTES map an incoming URL + HTTP method to a Controller function.
// Think of this as the "traffic cop" that isn't part of the classic
// M-V-C triangle but is essential glue in Express apps.

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.listUsers);           // GET  /users
router.get("/new", userController.showCreateForm);    // GET  /users/new
router.post("/", userController.createUser);          // POST /users
router.post("/:id/delete", userController.deleteUser); // POST /users/:id/delete

module.exports = router;
