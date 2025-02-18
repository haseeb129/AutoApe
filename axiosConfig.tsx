import axios from 'axios';
import {useStore} from './src/zustand';
import {ApiEndpoints} from './src/theme/constants';

const Axios = axios.create({
  baseURL: process.env.STAGING_BASE_URL,
  // baseURL: process.env.PRODUCTION_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'X-API-SOURCE':'genius'
  },
});

Axios.interceptors.request.use(
  async config => {
    const {accessToken} = useStore.getState();
    console.log("accessToken", accessToken)

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

Axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      const {refreshToken, setAccessToken, setRefreshToken} =
        useStore.getState();

      const response = await axios.post(
        `${process.env.PRODUCTION_BASE_URL}${ApiEndpoints.refreshToken}`,
        {
          refresh_token: refreshToken,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response?.data?.success) {
        setAccessToken(response?.data?.access_token);
        setRefreshToken(response?.data?.refresh_token);

        originalRequest.headers.Authorization = `Bearer ${response?.data?.access_token}`;
        return axios(originalRequest);
      }
    }

    return Promise.reject(error);
  },
);

export default Axios;
