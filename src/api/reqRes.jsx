import axios from 'axios';

const reqResApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1/region'
});

export default reqResApi;
