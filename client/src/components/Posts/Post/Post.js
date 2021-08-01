import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Delete, MoreHoriz, ThumbUpAlt } from '@material-ui/icons';
import React from 'react';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
const Post = ({ post, setCurrentId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<Card className={classes.card}>
			<CardMedia image={post.selectedFile} title={post.title} className={classes.media} />
			<div className={classes.overlay}>
				<Typography variant="h6">{post.creator}</Typography>
				<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
			</div>
			<div className={classes.overlay2}>
				<Button
					style={{ color: 'white' }}
					size="small"
					onClick={() =>
						post.creator == 'Tue'
							? alert("Please don't edit my posts. Create your own!")
							: setCurrentId(post._id)}
				>
					<MoreHoriz fontSize="default" />
				</Button>
			</div>
			<div className={classes.details}>
				<Typography variant="body2" color="textSecondary" component="h2">
					{post.tags.map((tag) => `#${tag} `)}
				</Typography>
			</div>
			<Typography className={classes.title} gutterBottom variant="h5" component="h2">
				{post.title}
			</Typography>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{post.message}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
					<ThumbUpAlt fontSize="small" /> &nbsp; Likes &nbsp;{post.likeCount}
				</Button>
				<Button
					size="small"
					color="primary"
					onClick={() =>
						post.creator == 'Tue'
							? alert("Please don't delete my posts. Create your own.")
							: dispatch(deletePost(post._id))}
				>
					<Delete fontSize="small" /> Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
