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

export const saveHashtag = (hashtag, token) => api.post(`/trending`, {hashtag} ,authConfig(token));

export const getLikes = ({token, postId}) => api.get(`/likes/${postId}`, authConfig(token));

export const likePost = ({token, postId}) => api.post(`/like/${postId}`, null, authConfig(token));

export const dislikePost = ({token, postId}) => api.post(`/dislike/${postId}`, null, authConfig(token));