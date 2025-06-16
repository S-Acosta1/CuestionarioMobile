require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const URL = process.env.REACT_APP_API_URL;

async function get(endpoint) {
  const res = await fetch(`${URL}${endpoint}`);
  if (!res.ok) throw new Error(`Error: ${res.status}`);
  return res.json();
}

module.exports = { get };

/*
USO: en test-api.js

