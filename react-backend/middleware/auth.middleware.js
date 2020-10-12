const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const token = req.cookies.token || '';
  try {
    if (!token) {
      return res.status(401).json('Вы не в системе')
    }
    const decrypt = await jwt.verify(token, process.env.SECRET);
    req.user = decrypt;
    next();
  } catch (err) {
    return res.status(400).json({message: 'Нет Авторизации'});
  }
}