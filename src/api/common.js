import axios from '@/libs/api.request'

let host = "/api";

export const get = (url, info) => {
  return axios.request({
    url: host+url,
    params: info,
    method: 'get'
  })
};

export const del = (url) => {
  return axios.request({
    url: host+url,
    method: 'delete'
  })
};

export const post = (url, data) => {
  return axios.request({
    url: host+url,
    data: data,
    method: 'post'
  })
};

export const put = (url, data) => {
  return axios.request({
    url: host+url,
    data: data,
    method: 'put'
  })
};
