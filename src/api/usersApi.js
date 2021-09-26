import api from './api';

export const listUsers = config => {
  return api.get('users', config).then(res => res.data.users)
};

export const getUser = (userId, config) => {
  return api.get(`users/${userId}`, config).then(res => res.data.user)
}

export const addUser = (user, config) => {
  return api.post('users', user, config)
}