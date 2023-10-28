import boardInstance from './config/board_interceptor';

export const boardApi = {
  getAllPost: async () => {
    return boardInstance
      .get('/post/all')
      .catch((err) => {
        console.warn(err);
        return [];
      })
      .then((res) => {
        return res;
      });
  },
  getPost: async (postId) => {
    return boardInstance
      .get(`/post/${postId}`)
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
  addPost: async (data) => {
    return boardInstance
      .post('/post', data)
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
  updatePost: async (postId, data) => {
    return boardInstance
      .put(`/post/${postId}`, data)
      .catch((err) => console.warn(err))
      .then((res) => {
        console.log(res);
        return res;
      });
  },
  deletePost: async (postId) => {
    return boardInstance
      .delete(`/post/${postId}`)
      .catch((err) => console.warn(err))
      .then((res) => {
        console.log(res);
        return res;
      });
  },
  searchPost: async (keywords) => {
    return boardInstance
      .get('/post/search', {
        params: keywords,
      })
      .catch((err) => {
        console.warn(err);
        return [];
      })
      .then((res) => {
        console.log(res);
        return res;
      });
  },
  getAllComment: async (postId) => {
    return boardInstance
      .get('/comment', {
        params: {
          postId: postId,
        },
      })
      .catch((err) => {
        console.warn(err);
        return [];
      })
      .then((res) => {
        return res;
      });
  },
  addComment: async (data) => {
    return boardInstance
      .post('/comment', data)
      .catch((err) => console.warn(err))
      .then((res) => {
        console.log(res);
        return res;
      });
  },
  updateComment: async (data) => {
    return boardInstance
      .put('/comment', data)
      .catch((err) => console.warn(err))
      .then((res) => {
        console.log(res);
        return res;
      });
  },
  deleteComment: async (commentId) => {
    return boardInstance
      .delete(`/comment/${commentId}`)
      .catch((err) => console.warn(err))
      .then((res) => {
        console.log(res);
        return res;
      });
  },
};
