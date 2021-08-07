const express = require("express");
const router = express.Router();

// item model
const Item = require("../../models/Item");

// @route   Get api/items
// @desc    Get All Items
// @access  Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

// @route   Post api/items
// @desc    Post Item
// @access  Public
router.post("/", (req, res) => {
  Item.create({ name: req.body.name }).then((item) => res.json(item));
});

// @route   Delete api/items
// @desc    Delete Item
// @access  Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => {
      item.deleteOne().then(() => res.json({ success: true }));
    })
    .catch((e) => res.status(404).json({ success: false }));
});

module.exports = router;
