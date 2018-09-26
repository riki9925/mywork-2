import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import Footer from './footer';
import LazyLoad from 'react-lazyload';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	dense: {
		marginTop: 19,
	},
	menu: {
		width: 200,
	},
	button: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	},
});

function Pembayaran(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<Header />
			<main>
				<LazyLoad>
					<Grid container spacing={24}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<Typography variant="headline" color="Black" align="center" noWrap>
									PT.Global Mitra Copierindo
								</Typography>
								<form className={classes.container} noValidate autoComplete="off">
									<TextField
										id="standard-full-width"
										label="Nama"
										style={{ margin: 8 }}
										placeholder="Isikan Nama Lengkap Anda"
										fullWidth
										margin="normal"
										InputLabelProps={{
											shrink: true,
										}}
									/>
									<TextField
										id="standard-full-width"
										label="Alamat"
										style={{ margin: 8 }}
										placeholder="Isikan Alamat Lengkap Anda"
										fullWidth
										margin="normal"
										InputLabelProps={{
											shrink: true,
										}}
									/>
									<TextField
										id="standard-full-width"
										label="NO HandPhone"
										style={{ margin: 8 }}
										placeholder="Isikan NO HandPhone Lengkap Anda"
										fullWidth
										margin="normal"
										InputLabelProps={{
											shrink: true,
										}}
									/>
									<TextField
										id="standard-full-width"
										label="Penawaran"
										style={{ margin: 8 }}
										placeholder="Masukan Nominal Tawaran Anda"
										fullWidth
										margin="normal"
										InputLabelProps={{
											shrink: true,
										}}
									/>
									<Button variant="contained" color="primary" className={classes.button}>
										Nego Sekarang !
									</Button>
								</form>
							</Paper>
						</Grid>
					</Grid>
				</LazyLoad>
			</main>
			<Footer />
		</React.Fragment>
	);
}

Pembayaran.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pembayaran);
