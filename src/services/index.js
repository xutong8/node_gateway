const axios = require('axios');

const BASE_URL = 'http://10.76.0.166:23334/vis';

const instance = axios.create({
  baseURL: BASE_URL
});

const httpRequest = {
  get(url, config) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, config ?? {})
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(url, data, config) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, data, config ?? {})
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = httpRequest;