import axios from 'axios';

export const $http = axios;
export const $LIBRARIES_IO_SECRET_KEY = process.env.VUE_APP_LIBRARIES_IO_SECRET_KEY;

export default {
  $http,
  $LIBRARIES_IO_SECRET_KEY
};
