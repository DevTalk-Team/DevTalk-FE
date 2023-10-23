import boardInstance from './config/board_interceptor';

export const boardApi = {
  getBoardList: async () => {
    return boardInstance
      .get('/post/all')
      .catch((err) => console.warn(err))
      .then((res) => {
        return res;
      });
  },
  addPost: async (data) => {
    return boardInstance
      .post(
        '/post',
        data /* {
        headers: {
          'Content-Type': 'multipart/form-data',
          'User-Email': 'mentee@gmail.com',
        },
      }) */
      )
      .catch((err) => console.warn(err))
      .then((res) => {
        console.log(res);
        return res;
      });
  },
};
