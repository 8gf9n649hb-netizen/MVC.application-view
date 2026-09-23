// models/user.model.js
// MODEL = manages data + business logic. It knows NOTHING about
// HTTP requests, routes, or how data is displayed.
//
// In a real app this would talk to a database (MongoDB, MySQL, etc.).
// Here we use a simple in-memory array so you can run it instantly.

let users = [
  { id: 1, name: "Ravi Kumar", email: "ravi@example.com" },
  { id: 2, name: "Asha Patel", email: "asha@example.com" },
];

let nextId = 3;

const User = {
  getAll: () => users,

  getById: (id) => users.find((u) => u.id === Number(id)),

  create: (name, email) => {
    const newUser = { id: nextId++, name, email };
    users.push(newUser);
    return newUser;
  },

  delete: (id) => {
    users = users.filter((u) => u.id !== Number(id));
  },
};

module.exports = User;
