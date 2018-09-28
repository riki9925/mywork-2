import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
	paper: {
		padding: theme.spacing.unit * 10,
		textAlign: 'center',
		color: theme.palette.text.secondary,
		marginBottom: theme.spacing.unit * 3,
		widht: 150,
	},
	card: {
		width: 240,
		paddingLeft: '5px',
	},
	harga: {
		color: '#2d6eef',
		fontWeight: 'Bold',
		paddingLeft: '10px',
	},
	pro: {
		fontSize: '15px',
		fontWeight: 'Bold',
		paddingLeft: '10px',
	},
	padding: {
		paddingTop: '20px',
	},
	image: {
		height: 200,
		widht: 200,
	},
	media: {
		height: 240,
	},
	root: {
		flexGrow: 1,
	},
});

class List extends React.Component {
	state = {
		product: [],
		open: false,
		scroll: 'paper',
	};

	handleClickOpen = scroll => () => {
		this.setState({ open: true, scroll });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	componentDidMount() {
		axios.get('http://192.168.100.60:9000/global/auth/product1/detail').then(res => {
			const product = res.data;
			this.setState({ product });
		});
	}

	render() {
		const { classes } = this.props;
		const { open } = this.props;
		const Child = () => (
			<div>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					scroll={this.state.scroll}
					aria-labelledby="scroll-dialog-title"
				>
					<DialogTitle id="scroll-dialog-title">a</DialogTitle>
					<DialogContent>
						<Paper className={classes.paper}>
							<DialogContentText>
								<Grid container spacing={24}>
									<Grid item xs={12}>
										<Paper className={classes.paper}>
											<img
												width="250"
												height="200"
												src="https://www.fotocopy.co.id/wp-content/uploads/2018/08/canon-ir-c3020-wifi-300x300.jpg"
												className={classes.img}
												alt=""
											/>
										</Paper>
									</Grid>
								</Grid>
							</DialogContentText>
						</Paper>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Close
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);

		return (
			<Grid container spacing={24}>
				{this.state.product.map(a => (
					<Grid item xs={6} sm={3}>
						<Card className={classes.card} key={a.id}>
							<CardMedia className={classes.media}>
								<img className={classes.image} src={a.Gambar} />
								<Typography className={classes.pro}>{a.Nama}</Typography>
								<Typography gutterBottom component="h1" variant="headline" className={classes.harga}>
									Rp. {a.Harga}
								</Typography>
							</CardMedia>
							<CardActions className={classes.padding}>
								<Router>
									<div>
										<Button size="small" color="primary" variant="outlined">
											Beli
										</Button>
										<Button size="small" color="primary" variant="outlined">
											Nego
										</Button>
										<Link to="/:id">
											<Button
												onClick={this.handleClickOpen('paper')}
												size="small"
												color="primary"
												variant="outlined"
											>
												Detail
											</Button>
										</Link>
										<Child />
										<Route path="/:id" component={Child} />
									</div>
								</Router>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		);
	}
}

List.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);
