// Cтатусы ответа сервера
const CREATED_CODE = 201;
const SERVER_ERROR = 500;

// Регулярное выражение
const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

// Сгенерированный секретный ключ через консоль командой
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"
const authKey = 'bd74a7192c8c19a9a102bf7b7e55be308262175405f5133dc57d4c1183e4bcaa';

module.exports = {
  CREATED_CODE,
  SERVER_ERROR,
  authKey,
  urlRegex,
};
