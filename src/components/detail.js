import React from 'react';
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

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 10,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing.unit * 3,
        widht: 150,
    },
    card: {
        paddingLeft: '10px'
    },
    harga: {
        paddingTop: "10px",
        color: "blue",
        fontWeight: "Bold"
    },
    Deskripsi: {
        fontSize: "20px",
        color: "blue",
        fontWeight: "Bold",

    },
    panjang: {
        fontWeight: "Bold",
        borderStyle: "dotted dashed solid double"
    }
});

function Detail(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <Header />
            <main>
                <LazyLoad>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <img width="250"
                                    height="200" src="https://www.fotocopy.co.id/wp-content/uploads/2015/03/canon-ir-3235-rekondisi-1.jpg" alt="" />

                                <Typography
                                    variant="headline"
                                    align="center"
                                    noWrap
                                    className={classes.harga}
                                >
                                    Rp. 17.000.000
					</Typography></Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography
                                variant="headline"
                                color="inherit"
                                align="left"
                                noWrap
                            >
                                Canon IR 3235
					</Typography>
                            <Typography

                                className={classes.Deskripsi}
                                align="left"

                            >
                                Deskripsi :
					</Typography>
                            <Typography component="p"
                                className={classes.panjang}>
                                Digital Multifunction Device Monochrome Canon iR 3235 Rekondisi

            Mesin dengan kecepatan 35 lembar permenit ini sangat cocok untuk pemula yang ingin membuka usaha fotocopy. Dengan kapasitas cetak tinggi hingga 150.000 per bulan mampu melayani konsumen fotocopy di toko anda.

            Duplex Automatic Document Feeder (DADF)

            Dilengkapi dengan Duplex Automatic Document Feeder (DADF) menjadikan mesin ini sangat efisien untuk melayani konsumen atau untuk kebutuhan di kantor anda. Fotocopy dalam jumlah banyak tidak perlu repot lagi buka dan tutup pintu.

            Copy, Print dan Scan

            Fitur lengkap dari mulai Fotocopy, Print Hingga Scan Warna sudah disematkan pada type ini.

            Image Repeat

            Dilengkapi dengan fitur Image Repeat yang sangat membantu usaha fotocopy, yaitu ketika fotocopy KTP 1 lembar kertas A4 bisa menjadi 9 buah KTP bolak-balik. Hemat Bukan?

            Network Ready

            Print dan Scan tidak lagi menggunakan kabel USB, sehingga Print dan Scan dari atau ke banyak komputer sudah bisa menggunakan mesin ini. Print jarak jauh pun bisa dilakukan dengan metode Cloud.

            Spesifikasi

                    </Typography>
                        </Grid>
                    </Grid>
                </LazyLoad>
            </main>
            <Footer />
        </React.Fragment>
    );
}

Detail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Detail);
