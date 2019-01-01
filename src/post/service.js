import api from '../common/api';
import normalizeDataList from '../common/normalize-data-list';

const PostService = {
  getPosts() {
    return new Promise((resolve, reject) => {
      api.get('/posts')
        .then(response => normalizeDataList(response.data, 'posts'))
        .then(resolve)
        .catch(reject);
    });
  },

  getPost(id) {
    return new Promise((resolve, reject) => {
      api.get(`/posts/${id}`)
        .then(response => response.data)
        .then(resolve)
        .catch(reject);
    });
  },
};

export default PostService;
