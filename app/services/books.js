import axios from 'axios';

const service = {
  getBooks: () => axios.get('/book')
  .then(response => response)
  .catch(err => console.log('services ',err))
};

export default service;
