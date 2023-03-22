import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

const authConfig = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

// export const createUsers = (params, token) => api.post('/users', params, authConfig(token));

export const createPost = (url, content, token) => api.post('/timeline', {url, content}, authConfig(token));

export const listPost = ({token, offset}) => api.get(`/timeline?offset=${offset}`, authConfig(token));

export const trendingHashtags = (token) => api.get('/trending', authConfig(token));

export const hashtagPosts = (params, token) => api.get(`/hashtag/${params}`, authConfig(token));

export const saveHashtag = (hashtag, token) => api.post(`/trending`, {hashtag} ,authConfig(token))

export const getLikes= (params)=>api.get(`/likes/${params}`);

export const giveALike= (params, token) => api.post(`/like/${params}`, authConfig(token));

export const takeALike= (params, token) => api.post(`/dislike/${params}`, authConfig(token));