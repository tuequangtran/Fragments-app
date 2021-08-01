import * as api from '../api';

//action creator
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		const action = { type: 'FETCH_ALL', payload: data };
		dispatch(action);
	} catch (error) {
		console.log('actions, getPosts', error);
	}
};

export const createPost = (postData) => async (dispatch) => {
	try {
		const { data } = await api.createPost(postData);
		const action = { type: 'CREATE', payload: data };
		dispatch(action);
	} catch (error) {
		console.log('actions, createPosts', error);
	}
};

export const updatePost = (id, postData) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, postData);
		const action = { type: 'UPDATE', payload: data };
		dispatch(action);
	} catch (error) {
		console.log('actions, createPosts', error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);
		const action = { type: 'DELETE', payload: id };
		dispatch(action);
	} catch (error) {
		console.log('actions, deletePosts', error);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		const action = { type: 'UPDATE', payload: data };
		dispatch(action);
	} catch (error) {
		console.log('actions, likePosts', error);
	}
};
