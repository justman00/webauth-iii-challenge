const express = require("express");
const db = require("../database/dbConfig");

const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const users = await db("users");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
