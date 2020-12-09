import http from '../api/API';

const getAllUsers = () => {
  return http.get('/user');
};

export default { getAllUsers };
