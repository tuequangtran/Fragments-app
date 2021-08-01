import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';
const Form = ({ currentId, setCurrentId }) => {
	const [ postData, setPostData ] = useState({
		creator      : '',
		title        : '',
		message      : '',
		tags         : '',
		selectedFile : ''
	});
	const post = useSelector((state) => (currentId ? state.posts.find((post) => post._id === currentId) : null));

	useEffect(
		() => {
			if (post) setPostData(post);
		},
		[ post ]
	);

	const dispatch = useDispatch();
	const classes = useStyles();
	const handleSubmit = (event) => {
		event.preventDefault();
		if (currentId) {
			dispatch(updatePost(currentId, postData));
			clear();
		} else {
			dispatch(createPost(postData));
			clear();
		}
		//console.log('form, dispatched');
	};
	const clear = () => {
		setCurrentId(null);
		setPostData({
			creator      : '',
			title        : '',
			message      : '',
			tags         : '',
			selectedFile : ''
		});
	};
	return (
		<Paper className={classes.paper}>
			<form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
				<Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Fragment</Typography>
				<TextField
					fullWidth
					name="creator"
					variant="outlined"
					label="Creator"
					value={postData.creator}
					onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
				/>
				<TextField
					fullWidth
					name="title"
					variant="outlined"
					label="Title"
					value={postData.title}
					onChange={(e) => setPostData({ ...postData, title: e.target.value })}
				/>
				<TextField
					fullWidth
					name="message"
					variant="outlined"
					label="Message"
					value={postData.message}
					onChange={(e) => setPostData({ ...postData, message: e.target.value })}
				/>
				<TextField
					fullWidth
					name="tags"
					variant="outlined"
					label="Tags"
					value={postData.tags}
					onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
					/>
				</div>
				<Button
					className={classes.buttonSubmit}
					variant="contained"
					color="primary"
					size="large"
					type="submit"
					fullWidth
				>
					Submit
				</Button>
				<Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
