const User = require("../models/users");
exports.userByID = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      res.status(400).json({
        err: "user not found",
      });
    }

    req.profile = user;
    next();
  });
};
