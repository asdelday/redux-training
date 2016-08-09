const API_KEY = '3b4bf5d1b73844a46d25e5d15bbbde79';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) return response;

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

function getParams(params = {}) {
  return Object.keys(params).map(
    (key) => `${key}=${params[key]}`
  ).join('&');
}

export const getHeroes = (params = {}) => new Promise((resolve, reject) => {
  const BASE_URL = 'http://gateway.marvel.com:80/v1/public/characters';
  const formattedParams = getParams(params);
  const url = `${BASE_URL}?${formattedParams}${formattedParams ? '&' : ''}apikey=${API_KEY}`;

  fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      const results = (data && data.data && data.data.results) || [];
      return resolve(results);
    })
    .catch((error) => reject(error));
});

export const getHero = (heroId) => new Promise((resolve, reject) => {
  const BASE_URL = 'http://gateway.marvel.com:80/v1/public/characters/';
  const url = `${BASE_URL}${heroId}?apikey=${API_KEY}`;

  fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      const results = (data && data.data && data.data.results) || [];
      return resolve(results);
    })
    .catch((error) => reject(error));
});
