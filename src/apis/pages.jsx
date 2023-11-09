import { getAuthAxios } from './authAxios';

const baseURL = process.env.REACT_APP_API_URL;

export const getMyPage = async () => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('엑세스토큰', accessToken);
  const authAxios = getAuthAxios(accessToken);
  const result = await authAxios.get(`${baseURL}/member/mypage`, {});
  console.log('결과물', result);
  return result;
};

//상담예약(가능한 전문가 리스트)
export const getMatchingPage = async ({ type, category, f2f, region }) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('엑세스토큰', accessToken);
  const authAxios = getAuthAxios(accessToken);
  const result = await authAxios.post(`${baseURL}/member/consultant`, {
    type: type,
    category: category,
    f2f: f2f,
    region: region,
  });
  console.log('결과물', result);
  return result;
};

//상담예약(시간,날짜 설정)
export const getConsultantTime = async (mentor, date) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('엑세스토큰', accessToken);
  const authAxios = getAuthAxios(accessToken);
  const result = await authAxios.get(
    `${baseURL}/product/search/consultants/${mentor}/Date/${date}`,
    {}
  );
  console.log('결과물', result);
  return result;
};

//홈페이지 예약정보 불러오기
export const getConsultantRezInfo = async (email) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('엑세스토큰', accessToken);
  const authAxios = getAuthAxios(accessToken);
  const result = await authAxios.get(
    `${baseURL}/product/search/consultants/${mentor}/Date/${date}`,
    {
      headers: {
        'User-Email': email,
      },
    }
  );
  console.log('결과물', result);
  return result;
};
