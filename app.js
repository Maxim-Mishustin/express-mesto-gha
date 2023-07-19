// Подключение express к приложению
// Express обрабатывает веб-маршрутизацию и запросы
const express = require('express');

// Подключение объектно-документальной модели (Object-Document Mapping, ODM)
// для Node.js, которая облегчает взаимодействие с MongoDB.
// Mongoose предоставляет удобный интерфейс для работы с MongoDB,
// включая определение схем, валидацию и выполнение запросов
const mongoose = require('mongoose');

// Это пакет, который предоставляет набор механизмов для
// улучшения безопасности вашего Express-приложения
const helmet = require('helmet');

// Подключаем определенные маршруты для приложения Express.
const routes = require('./routes/router');

// Порт 3000 для работы бекенда
// Если в файле .env мы не присваиваем переменной PORT значение,
// то наш бекенд по умолчанию будет крутиться на 3000 порту
const { PORT = 3000 } = process.env;

const app = express();

app.use(helmet());

app.disable('x-powered-by');

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '64afe5247c672b47d185bac6', // ID пользователя из mongo.
  };
  /*
  {
    "name": "Maksim",
    "about": "Frontend-Developer Express.js",
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4zds_utF8yr-YY_Ohot6aD5n65qeASNBVfiADsTDSlsUVXywOFVjFZslYEza7b-ACzs&usqp=CAU",
    "_id": "64afe5247c672b47d185bac6"
}
*/
  next();
});

app.use(routes);

// Данный адрес взят после подключения через терминал с помощью mongosh:
mongoose
  .connect('mongodb://127.0.0.1:27017/mestodb')
  .then(() => {
    console.log('БД подключена');
  })
  .catch(() => {
    console.log('Не удалось подключиться к БД');
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
