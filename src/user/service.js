import api from '../common/api';
import normalizeDataList from '../common/normalize-data-list';
import { addRandomUser } from './fixtures';

const UserService = {
  getUsers() {
    return new Promise((resolve, reject) => {
      api.get('/users')
        .then(addRandomUser)
        .then(response => normalizeDataList(response.data, 'users'))
        .then(resolve)
        .catch(reject);
    });
  },

  getUser(id) {
    return new Promise((resolve, reject) => {
      api.get(`/users/${id}`)
        .then(response => response.data)
        .then(resolve)
        .catch(reject);
    });
  },
};

export default UserService;
