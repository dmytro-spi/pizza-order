const User = require('../models/User');

export const getMe = async email => {
  const user = await User.findOne({ email });

  if (!user) {
    throw Error('User not found');
  }

  return user;
}