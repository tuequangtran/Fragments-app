import axios from 'axios';

const url = 'https://fragments-app-precious-moments.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (postData) => axios.post(url, postData);
export const updatePost = (id, postData) => axios.patch(`${url}/${id}`, postData);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likepost`);
