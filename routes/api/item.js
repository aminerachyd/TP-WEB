const express = require("express");
const router = express.Router();

// Item model
const Item = require("../../model/Item");

// @route    GET /api/items
// @desc     Get all items
// @route    Public
router.get("/", async (req, res) => {
  try {
    const items = await Item.find().sort({ date: -1 });

    res.status(200).send(items);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// @route    GET /api/items/:id
// @desc     Get one item by id
// @route    Public
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findById(id);

    // If the item doesn't exist, we send a 404
    if (!item) {
      res.status(404).send("Item not found");
      return;
    }

    res.status(200).send(item);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// @route    POST /api/items
// @desc     Add an item
// @route    Public
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    const newItem = new Item({
      name,
    });

    const saved = await newItem.save();
    res.status(200).send(saved);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// @route    PUT /api/items/:id
// @desc     Update an item
// @route    Public
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updated = await Item.findByIdAndUpdate(id, { name });

    // If the item doesn't exist, we send a 404
    if (!updated) {
      res.status(404).send("Item not found");
      return;
    }

    res.status(200).send(updated);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// @route    DELETE /api/items/:id
// @desc     Delete an item
// @route    Public
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const removed = await Item.findByIdAndDelete(id);

    // If the item doesn't exist, we send a 404
    if (!removed) {
      res.status(404).send("Item not found");
      return;
    }

    res.status(200).send(removed);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
