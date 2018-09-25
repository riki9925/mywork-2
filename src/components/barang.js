import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MediaCard from './card.js';
import Header from './header';
import Footer from './footer';
import Menubarpro from './menubarpro';

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
        padding:'20px'
    },
    menubar: {
        paddingTop:'20px',
        padding:'20px'
    }
});

function Barang(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <Header />
            <Menubarpro className={classes.menubar}/>
            <main>
                <MediaCard className={classes.card} />
            </main>
            <Footer />
        </React.Fragment>
    );
}

Barang.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Barang);
