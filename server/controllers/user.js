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

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};
exports.update = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, user) => {
      if (err) {
        res.status(400).json({
          err: "You are not authorized to perform this action",
        });
      }

      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    }
  );
};
