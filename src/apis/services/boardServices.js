import { boardApi } from '../boardApi';

export const getBoardListAll = async () => {
  try {
    const res = await boardApi.getBoardList();
    const { code, result } = res.data;

    if (code === '0401') {
      return result;
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addPost = async (data) => {
  try {
    const res = await boardApi.addPost(data);

    if (res.data.code === '0400') {
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
