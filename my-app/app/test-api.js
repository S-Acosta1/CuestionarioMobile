const api = require('../services/api');

api.get('/users')
  .then(data => console.log('Usuarios:', data))
  .catch(err => console.error('Error:', err.message));

/*
  const api = require('./services/api');

api.get('/users')
  .then(data => console.log(data))
  .catch(err => console.error(err));
*/