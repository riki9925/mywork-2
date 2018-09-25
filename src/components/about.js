import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import Footer from './footer';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	paper: {
		padding: theme.spacing.unit * 10,
		textAlign: 'left',
		color: theme.palette.text.secondary,
		marginBottom: theme.spacing.unit * 3,
		widht: 150,
	},
	card: {
		paddingLeft: '10px',
	},
});

function About(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<Header />
			<main>
				<Grid container spacing={24}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Typography variant="headline" gutterBottom>
								Headline
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>
							<Typography variant="display2" color="inherit" gutterBottom>
								Visi
							</Typography>
							<Typography variant="subheading" paragraph>
								Menjadi perusahaan penjualan mesin fotocopy Baru dan Rekondisi No 1 di Indonesia dan
								Asia
							</Typography>
							<Typography variant="display2" color="inherit" gutterBottom>
								MISI
							</Typography>
							<Typography variant="subheading" paragraph>
								Menjadikan perusahaan sebagai mitra terpercaya dalam Pelayanan, Pembinaan, dan
								Pengembangan Usaha dibidang Fotocopy Menciptakan lebih banyak wirausaha baru dibidang
								usaha fotocopy komersial Mampu memberikan pelayanan yang sangat memuaskan dan memberikan
								lebih dari apa yang di harapkan pelanggan. Menciptakan Win-win solution untuk pelanggan
								Global Mitra Copierindo
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>
							<Typography variant="display2" color="inherit" gutterBottom>
								Motto
							</Typography>
							<Typography variant="subheading" paragraph>
								Kami akan memberikan standart pelayanan purna jual yang memadai sesuai dengan kebutuhan
								para pelanggan. Kami dengan pasti akan menjamin untuk memberikan dukungan pelayanan
								total kepada pelanggan kami mulai dari: Untuk menjamin kualitas produk, maka Kami
								menggunakan Bahan habis pakai dan suku cadang dengan standart mutu yang terjamin dan
								harga yang sangat bersaing. Customer service kami selalu siap menangani segala masalah
								yang berkaitan dengan mesin fotocopy dan siap memberikan solusi yang cepat dan tepat
								kepada para pelanggan kami.
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</main>
			<Footer />
		</React.Fragment>
	);
}

About.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
