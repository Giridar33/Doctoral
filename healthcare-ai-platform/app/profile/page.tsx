router.post('/profile', auth,
  [
    body('gender').optional().isString(),
    body('age').optional().isNumeric(),
    body('nationality').optional().isString(),
    body('height').optional().isNumeric(),
    body('weight').optional().isNumeric(),
    body('name').optional().isString(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      console.log('Incoming Profile Data:', req.body); // Debugging log

      // Update user profile
      const user = await User.findByIdAndUpdate(
        req.user.userId,
        { profile: req.body },  // Updated to include age
        { new: true }
      ).select('-password');

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);
