import axios from 'axios';
import { StretchingListResponse } from '../types/model/stretching';

const client = axios.create({
  // baseURL: 'https://movester.kr/api/v1',
  baseURL: 'http://809d-183-98-182-5.ngrok-free.app/api/v1',
  timeout: 5000,
});

export const apiFetchGetStretchings = async (page = 2, size = 10): Promise<StretchingListResponse> => {
  const res = await client.get('/stretchings', {
    params: {
      page,
      size,
      title: '',
      mainCategory: undefined,
      subCategory: undefined,
      effect: undefined,
      orderFilter: 'RECENT',
    },
  });
  return res.data;
};
