const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(403).json({ msg: "Unauthorized" });
  }

  jwt.verify(token, "qwertyuiop", (err, newToken) => {
    if (err) {
      res.status(500).json({ msg: "You shall not pass" });
    }

    req.decodedToken = newToken;
    next();
  });
};
