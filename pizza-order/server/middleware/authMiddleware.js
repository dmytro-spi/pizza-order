import jwt from 'jsonwebtoken';
import { getMe } from '../services/UserService';

const unathorizedResponse = (res, message) => {
  return res.status(401).json({ message });
};

const checkToken = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'You are not authorized' });
    }
    const { email } = await jwt.verify(token, process.env.JWT_SECRET);
    return email;
  } catch (err) {
    return unathorizedResponse('Invalid token');
  }
}

module.exports = async (req, res, next) => {
  try {
    const email = checkToken(req, res);
    req.user = getMe(email);
    next();
  } catch (err) {
    return res.status(500).json({ message: 'Internal error' });
  }
}