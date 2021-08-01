import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';
const Posts = ({ setCurrentId }) => {
	const classes = useStyles();
	const posts = useSelector((state) => state.posts);
	//console.log('posts', posts);
	return !posts.length ? (
		<CircularProgress />
	) : (
		<Grid spacing={3} alignItems="stretch" container className={classes.container}>
			{posts.map((post) => (
				<Grid key={post.id} item xs={12} sm={6}>
					<Post post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);

	// <React.Fragment>
	// 	<h1>postSSS</h1>
	// 	<Post />
	// 	<Post />
	// </React.Fragment>
};

export default Posts;
