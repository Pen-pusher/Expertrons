const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "mysecret", (err, decoded) => {
      if (err) return next(err);
      req.user = {
        userId: decoded.userId,
        email: decoded.email,
        token,
        image: decoded.image,
        username: decoded.username
      };
      next();
    });
  } else {
    res.status(401).json({ success: false, message: "Token not found" });
  }
};
