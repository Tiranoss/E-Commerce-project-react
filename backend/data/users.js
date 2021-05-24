const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Bilel Kanoun",
    email: "Bilel@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Tiranoss King",
    email: "Tiranoss@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
