require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const API_URL = process.env.REACT_APP_API_URL;

fetch(`${API_URL}/users`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));