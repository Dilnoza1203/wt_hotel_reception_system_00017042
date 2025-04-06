const express = require('express');
const { validationResult } = require('express-validator');
const { addGuestValidation, deleteGuestValidation, updateGuestValidation } = require('../../../validators/guest');

const router = express.Router();
const guest_controller = require('../../../controllers/api/guest');

// Define API routes
router.get('/', (req, res) => {
  guest_controller.getAll(req, res);
});

router.post('/', addGuestValidation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  guest_controller.create(req, res)
})

router.put('/:id', updateGuestValidation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  guest_controller.update(req, res)
})

router.delete('/:id', deleteGuestValidation(), (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  guest_controller.delete(req, res)
})

module.exports = router;