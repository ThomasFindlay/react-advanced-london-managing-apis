import api from './apiWithFetch';

export const listUsers = config => {
  return api.get('users', config);
};
