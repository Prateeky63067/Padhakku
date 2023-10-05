// userController.js
const User = require('../models/userModel');

exports.signup = async (req, res) => {
  const { name, email } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    const newUser = new User({ name, email });

    await newUser.save();

    return res.status(200).json(newUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'User signup failed.' });
  }
};
