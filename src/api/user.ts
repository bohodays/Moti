import axiosInstance from './axiosInstance';

export default async function apiGetUserInfo() {
  try {
    const _reponse = await axiosInstance.get('');
  } catch (error) {
    console.error(error);
  }
}
