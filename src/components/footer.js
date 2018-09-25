import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Sales from './sales';

const styles = theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	appBar: {
		position: 'relative',
	},
	toolbarTitle: {
		flex: 1,
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
			width: 900,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	heroContent: {
		maxWidth: 600,
		margin: '0 auto',
		padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
	},
	cardHeader: {
		backgroundColor: theme.palette.grey[200],
	},
	cardFooter: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing.unit * 2,
	},
	cardActions: {
		[theme.breakpoints.up('sm')]: {
			paddingBottom: theme.spacing.unit * 2,
		},
	},
	footer: {
		marginTop: theme.spacing.unit * 8,
		borderTop: `1px solid ${theme.palette.divider}`,
		padding: `${theme.spacing.unit * 6}px 0`,
	},
});
const footers = [
	{
		title: 'Company',
		description: ['Team', 'History', 'Contact us', 'Locations'],
	},
	{
		title: 'Features',
		description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
	},
];

function Footer(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<CssBaseline />
			<footer className={classNames(classes.footer, classes.layout)}>
				<Grid container spacing={32} justify="space-evenly">
					
					<Grid item xs>
						<Typography variant="title" color="textPrimary" gutterBottom>
							Tentang Kami
						</Typography>
						<Typography variant="subheading" color="textSecondary">
							Tentang kami
						</Typography>
						<Typography variant="subheading" color="textSecondary">
							Kontak Kami
						</Typography>
						<Typography variant="subheading" color="textSecondary">
							Pembayaran
						</Typography>
						<Typography variant="subheading" color="textSecondary">
							Pengiriman
						</Typography>
					</Grid>
					<Grid item xs>
						<Typography variant="title" color="textPrimary" gutterBottom>
							Layanan
						</Typography>
						<Typography variant="subheading" color="textSecondary">
							After Sales Service
						</Typography>
						<Typography variant="subheading" color="textSecondary">
							Paket Usaha Fotocopy
						</Typography>
						<Typography variant="subheading" color="textSecondary">
							Sewa Mesin Fotocopy
						</Typography>
						<Typography variant="subheading" color="textSecondary">
							Service Center
						</Typography>
					</Grid>
					<Sales />
					{/* {footers.map(footer => ())}
						{footer.description.map(item => ())} */}
				</Grid>
			</footer>
			{/* End footer */}
		</React.Fragment>
	);
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
