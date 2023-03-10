import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const authConfig = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

// export const createUsers = (params, token) => api.post('/users', params, authConfig(token));

export const createPost = (url, content, token) => api.post('/timeline', {url, content}, authConfig(token));

export const listPost = (token) => api.get('/timeline', authConfig(token));

export const trendingHashtags = (token) => api.get('/trending', authConfig(token));

export const hashtagPosts = (params, token) => api.get(`/hashtag/${params}`, authConfig(token));

export const getLikes= (params)=>api.get(`/like/${params}`);

