import { URL } from '@env';

export async function get(endpoint) {
  const res = await fetch(`${URL}${endpoint}`);
  if (!res.ok) throw new Error(`Error: ${res.status}`);
  return res.json();
}