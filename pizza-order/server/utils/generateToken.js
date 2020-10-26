const jwt = require('jsonwebtoken');

const generateToken = (res, email, rememberMe, logout) => {
  const expiration = rememberMe ? 1209600000 : 604800000;
  if (logout) {
    expiration = 0;
  }

  try {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '14d',
    });

    res.cookie('token', token, {
      expires: new Date(Date.now() + expiration),
      secure: false, // set to true if your using https
      httpOnly: true,
    });

    res.send();
  } catch (err) {
    return re
  }
};

module.exports = generateToken