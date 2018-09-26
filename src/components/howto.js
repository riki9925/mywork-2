import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from './header';
import Footer from './footer';
import Grid from '@material-ui/core/Grid'

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
        padding: '20px'
    },
    menubar: {
        paddingTop: '20px',
        padding: '20px'
    }
});

function Howto(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <Header />
            <main>

            </main>
            <Footer />
        </React.Fragment>
    );
}

Howto.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Howto);
