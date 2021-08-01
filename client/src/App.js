import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import memories from './images/memories.png';
import { getPosts } from './actions/posts';

const App = () => {
	const [ currentId, setCurrentId ] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getPosts());
		},
		[ dispatch, currentId ]
	);

	return (
		<Container maxWidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography className={classes.heading} variant="h3" align="center">
					Fragments - app for precious moments
				</Typography>
				<img src={memories} height="80" className={classes.image} alt="icon" />
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justify="space-between"
						alignItems="stretch"
						spacing={3}
						className={classes.mainContainer}
					>
						<Grid item xs={12} sm={7}>
							<Posts setCurrentId={setCurrentId} />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
