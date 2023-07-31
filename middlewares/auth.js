const jwt = require('jsonwebtoken');
const AuthenticationError = require('../errors/AuthenticationError');
const { authKey } = require('../utils/constants');

module.exports = (req, _, next) => {
  const { authorization } = req.headers;
  const bearer = 'Bearer ';
  if (!authorization || !authorization.startsWith(bearer)) {
    return next(new AuthenticationError('Неправильные почта или пароль'));
  }
  const token = authorization.replace(bearer, '');
  let payload;
  try {
    payload = jwt.verify(token, authKey);
  } catch (err) {
    return next(new AuthenticationError('Неправильные почта или пароль'));
  }
  req.user = payload;
  return next();
};
