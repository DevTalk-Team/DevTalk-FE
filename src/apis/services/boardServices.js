import { boardApi } from '../boardApi';

// 게시글 전체 조회
export const getAllPost = async () => {
  try {
    const res = await boardApi.getAllPost();

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

// 게시글 단건 조회
export const getPost = async (postId) => {
  try {
    const res = await boardApi.getPost(postId);
    const { code, result } = res.data;

    if (code === '0401') {
      return result;
    }

    return {};
  } catch (error) {
    console.error(error);
    return {};
  }
};

// 게시글 작성
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

// 게시글 수정
export const updatePost = async (postId, data) => {
  try {
    console.log(postId, data);
    const res = await boardApi.updatePost(postId, data);

    if (res.data.code === '0403') {
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// 게시글 삭제
export const deletePost = async (postId) => {
  try {
    const res = await boardApi.deletePost(postId);

    if (res.data.code === '0404') {
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// 게시글 검색
export const searchPost = async (keywords) => {
  try {
    const res = await boardApi.searchPost(keywords);
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

// 댓글 전체 조회
export const getAllComment = async (postId) => {
  try {
    const res = await boardApi.getAllComment(postId);

    const { code, result } = res.data;

    if (code === '0406') {
      return result;
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 댓글 등록
export const addComment = async (data) => {
  try {
    console.log(data);
    const res = await boardApi.addComment(data);

    if (res.data.code === '0405') {
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// 댓글 수정
export const updateComment = async (data) => {
  try {
    const res = await boardApi.updateComment(data);

    if (res.data.code === '0407') {
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// 댓글 수정
export const deleteComment = async (commentId) => {
  try {
    const res = await boardApi.deleteComment(commentId);

    if (res.data.code === '0408') {
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
