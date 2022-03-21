

import axios from "axios";
import { apiPath, storageName } from '../config/variable'

// axios
// axios.defaults.baseURL = process.env.REACT_APP_API
let isRefresh = false;

// axios.defaults.baseURL = apiPath.baseURL;
// axios.defaults.timeout = 10000000;
// axios.defaults.headers.common = {'Authorization': localStorage.getItem(storageName.azureToken)};
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const instance  = axios.create({
  baseURL:  process.env.VUE_APP_BASEURL,
  timeout: 10000000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem(storageName.token)
  }
})

instance.interceptors.response.use(res => res , err => {
  if ( !err.response ) return Promise.reject(err)
  if ( !isRefresh ) {
    isRefresh = true;
    if ( err.response.status === 401 || err.response.status === 403 || err.response.status === 500 ) {
      const { config } = err;
      config.headers.Authorization = localStorage.getItem(storageName.token);
      instance.defaults.headers.common.Authorization = localStorage.getItem(storageName.token);
      instance.defaults.headers.Authorization = localStorage.getItem(storageName.token);
      return instance(config)
    }
  }
  return Promise.reject(err);
})

export default instance;