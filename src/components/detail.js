import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './card.js';
import Slick from './slick.js';
import Header from './header';
import Footer from './footer';
import LazyLoad from 'react-lazyload';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const styles = theme => ({
	paper: {
		padding: theme.spacing.unit * 10,
		textAlign: 'center',
		color: theme.palette.text.secondary,
		marginBottom: theme.spacing.unit * 3,
		widht: 150,
	},
	card: {
		paddingLeft: '10px',
	},
	harga: {
		paddingTop: '10px',
		color: 'blue',
		fontWeight: 'Bold',
	},
	Deskripsi: {
		fontSize: '17px',
		color: 'blue',
		fontWeight: 'Bold',
	},
	panjang: {
		fontWeight: 'Bold',
		borderStyle: 'dotted dashed solid double',
	},
	img: {
		borderWidth: '5px',
		borderStyle: 'double',
    },
    Nama: {
        fontSize: '20px',
        color:"black",
	},
});

class Detail extends Component {
	state = {
		product: [],
	};

	componentDidMount() {
		axios.get('http://192.168.100.60:9000/global/auth/product1/detail').then(res => {
			const product = res.data;
			this.setState({ product });
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<Header />
				<main>
					<LazyLoad>
						<Grid container spacing={24}>
							<Grid item xs={12}>
								{this.state.product.map(p => (
									<Paper className={classes.paper} key={p.id_product}>
										<img width="250" height="200" src={p.Gambar} className={classes.img} alt="" />
										<ul align="center" className={classes.Nama}>
											{p.Nama}
										</ul>
                                        <Typography variant="headline" align="left" noWrap className={classes.harga}>
											Rp.
											{p.Harga}
										</Typography>
										<Typography variant="headline" align="left" noWrap className={classes.Deskripsi} >
											Deskripsi :
										</Typography>
										<Typography component="p" className={classes.panjang}>
											{p.Deskripsi_lengkap}
										</Typography>
									</Paper>
								))}
							</Grid>
						</Grid>
					</LazyLoad>
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

Detail.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Detail);
