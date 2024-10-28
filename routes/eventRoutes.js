const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// Lấy tất cả sự kiện
router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Không lấy được sự kiện', error });
  }
});

// Thêm sự kiện mới
router.post('/', async (req, res) => {
  const { title, description } = req.body;

  try {
    const event = await Event.create({ title, description });
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: 'Thêm sự kiện thất bại', error });
  }
});

module.exports = router;
