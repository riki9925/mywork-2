import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from './header';
import Footer from './footer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LazyLoad from 'react-lazyload';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 3,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing.unit * 3,
        widht: 100,
    },
    card: {
        paddingLeft: '10px',
        padding: '20px'
    },
    menubar: {
        paddingTop: '20px',
        padding: '20px'
    },
    image: {
        widht: 100,

    }
});

function Howto(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <Header />
            <main>
                <LazyLoad>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                            <Typography
                        variant="headline"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Cara Pembelian
					</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>x
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>xs=6</Paper>
                        </Grid>
                    </Grid>
                </LazyLoad>

            </main>
            <Footer />
        </React.Fragment>
    );
}

Howto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Howto);
