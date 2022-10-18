import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});

export const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};

export default instance;
