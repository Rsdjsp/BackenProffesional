const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.cookies.token;

  try {
    const decoded = jwt.verify(token, "12345");
    req.user = decoded;
  } catch (error) {
    console.log(error);

    return res.status(403).json({
      error: true,
      message: "Insuficent Permissons",
    });
  }

  next();
}

module.exports = auth;
