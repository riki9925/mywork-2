import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from './header';
import Footer from './footer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LazyLoad from 'react-lazyload';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

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
        padding: '20px',
    },
    cover: {
        width: 220,
        height: 220,
    },
    menubar: {
        paddingTop: '20px',
        padding: '20px',
    },
    image: {
        widht: 100,
    },
    center: {
        margin: 'auto',
        widht: '60%',
        border: '1px solid #0000ff',
        padding: '10px',
    },
    toolbarTitle: {
        flex: 1,
    },
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
                                    color="black"
                                    align="center"
                                    noWrap
                                    className={classes.toolbarTitle}
                                >
                                    Cara Pembelian
								</Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Typography
                                    variant="headline"
                                    color="black"
                                    align="center"
                                    noWrap
                                    className={classes.toolbarTitle}
                                >
                                    Cara Pembelian Secara Offline
								</Typography>
                                <Paper className={classes.paper}>
                                    <Typography variant="subheading" paragraph>
                                        Datang langsung ke kantor kami dengan alamat Jl. Jendral Basuki Rahmat No. 23B
										Cipinang Besar Selatan, Jatinegara, Jakarta Timur
									</Typography>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Typography variant="subheading" paragraph>
                                        Lihat secara langsung produk yang anda inginkan agar lebih puas dan sesuai
										dengan kebutuhan anda.
									</Typography>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Typography variant="subheading" paragraph>
                                        Jika masih ragu dengan pilihan anda, bisa langsung konsultasikan dengan tim
										sales kami yang sedang bertugas.
									</Typography>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Typography variant="subheading" paragraph>
                                        Jika sudah menentukan produk yang sesuai, negosiasi harga langsung dengan Sales
										kami sampai deal
									</Typography>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Typography variant="subheading" paragraph>
                                        Jika sudah deal harga langsung bisa melakukan pembayaran secara Tunai, atau
										elektronik (EDC / Transfer) Informasi Pembayaran >>
									</Typography>
                                </Paper>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Typography
                                    variant="headline"
                                    color="black"
                                    align="center"
                                    noWrap
                                    className={classes.toolbarTitle}
                                >
                                    Cara Pembelian Secara Online
								</Typography>
                                <Paper className={classes.paper}>
                                    <Typography variant="subheading" paragraph>
                                        Lihat produk-produk kami melalui Smartphone atau PC/Laptop anda, cari produk
										yang sesuai dengan kebutuhan anda (Untuk usaha/kantor)
									</Typography>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Typography variant="subheading" paragraph>
                                        Bandingkan produk-produk yang anda cari secara online menggunakan fitur Compare
										pada website kami
									</Typography>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Typography variant="subheading" paragraph>
                                        Konsultasikan ke sales Online kami jika masih bingung menentukan produk yang
										cocok dengan kebutuhan anda
									</Typography>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Typography variant="subheading" paragraph>
                                        Jika sudah menentukan produk yang sesuai, negosiasi harga dengan Sales kami
										sampai deal melalui telepon / chat
									</Typography>
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Typography variant="subheading" paragraph>
                                        Jika sudah deal harga bisa melakukan pembayaran secara Transfer atau Setor tunai
										ke Rekening Perusahaan kami Informasi Pembayaran >>
									</Typography>
                                </Paper>
                            </Paper>
                        </Grid>
                        <Grid item xs={8} className={classes.center}>
                            Pengiriman dilakukan Max 3 hari setelah pembayaran atau DP (untuk COD khusus wilayah
							Jabodetabek) Informasi Pengiriman >>
						</Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography
                                    variant="headline"
                                    color="black"
                                    align="center"
                                    noWrap
                                    className={classes.toolbarTitle}
                                >
                                    Sales Online
								</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <Typography variant="headline" align="center" noWrap className={classes.toolbarTitle}>
                                    Sales Online
								</Typography>
                                <Paper className={classes.paper}>
                                    <Typography variant="subheading" paragraph>
                                        Halo saya Hamdi, sales yang bertugas di www.fotocopy.co.id, jika anda memiliki
										pertanyaan seputar Pemesanan Mesin Fotocopy, Nego Harga, Kuantitas, atau untuk
										Tender silahkan ajukan pertanyaan melalui:Telepon, Email, Whatsapp, Video
										Call,  Atau bisa datang langsung ke kantor dan ngobrol langsung dengan saya
									</Typography>
                                </Paper>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <CardMedia
                                    className={classes.cover}
                                    image="https://cdn.fotocopy.co.id/images/hamdi.jpg"
                                    title="Hamdi"
                                />

                            </Paper>
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
