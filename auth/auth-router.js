const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  let { username, password, department } = req.body;

  if (!username || !password || !department) {
    res.status(400).json({ err: "bad req" });
  }

  password = bcrypt.hashSync(password, 8);

  try {
    const user = await db("users").insert({ username, password, department });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await db("users")
      .where({ username })
      .first();

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);

      res.status(200).json({ user, token });
    } else {
      res.status(401).json({ msg: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

function generateToken({ id, username, department }) {
  const payload = {
    subject: id,
    username,
    department
  };
  const secret = "qwertyuiop";

  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;
