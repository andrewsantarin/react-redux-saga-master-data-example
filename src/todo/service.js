import api from '../common/api';
import normalizeDataList from '../common/normalize-data-list';

const TodoService = {
  getTodos() {
    return new Promise((resolve, reject) => {
      api.get('/Todos')
        .then(response => normalizeDataList(response.data, 'todos'))
        .then(resolve)
        .catch(reject);
    });
  },

  getTodo(id) {
    return new Promise((resolve, reject) => {
      api.get(`/Todos/${id}`)
        .then(response => response.data)
        .then(resolve)
        .catch(reject);
    });
  },
};

export default TodoService;
