const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const token = reqcookies.token || '';
  try {
    if (!token) {
      return res.status(401).json('Вы не в системе')
    }
    const decrypt = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = { email: decrypt.email };
    next();
  } catch (err) {
    return res.status(400).json({message: 'Нет Авторизации'});
  }
}