const Category = require("../models/category");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.categoryByID = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      res.status(400).json({ error: "category doesn't exist" });
    }
    req.category = category;
    next();
  });
};

exports.read = (req, res) => {
  return res.json(req.category);
};

exports.create = (req, res) => {
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      res.status(400).json({ error: errorHandler(err) });
    }
    res.json({ data });
  });
};

exports.update = async (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  category.save((err, data) => {
    if (err) {
      res.status(400).json({ error: errorHandler(err) });
    }
    res.json(data);
  });
};

exports.remove = (req, res) => {
  const category = req.category;

  category.remove((err, data) => {
    if (err) {
      res.status(400).json({ error: errorHandler(err) });
    }
    res.json({ message: "category deleted successfully" });
  });
};

exports.readAll = (req, res) => {
  Category.find().exec((err, data) => {
    if (err) {
      res.status(400).json({ error: errorHandler(err) });
    }
    res.json(data);
  });
};
