import { getAuthAxios } from './authAxios';

export const getMyPage = async () => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('엑세스토큰', accessToken);
  const authAxios = getAuthAxios(accessToken);
  const result = await authAxios.get('/member/mypage', {});
  console.log('결과물', result);
  return result;
};

export const getMatchingPage = async ({ type, category, f2f, region }) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('엑세스토큰', accessToken);
  const authAxios = getAuthAxios(accessToken);
  const result = await authAxios.post('/member/consultant', {
    type: type,
    category: category,
    f2f: f2f,
    region: region,
  });
  console.log('결과물', result);
  return result;
};

export const getConsultantTime = async (mentor) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('엑세스토큰', accessToken);
  const authAxios = getAuthAxios(accessToken);
  const result = await authAxios.get(
    `/product/search/consultants/${mentor}`,
    {}
  );
  console.log('결과물', result);
  return result;
};
