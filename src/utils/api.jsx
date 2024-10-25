import { googleBooksAPI, bestSellersAPI } from '../const';

export const validateFetch = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getBook = () => {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:9781429914567&key=${googleBooksAPI}`
  ).then((res) => {
    return validateFetch(res);
  });
};

export const getBestSellers = () => {
  return fetch(
    `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${bestSellersAPI}`
  ).then((res) => {
    return validateFetch(res);
  });
};
