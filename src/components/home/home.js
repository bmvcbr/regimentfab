import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CardContent from '@mui/material/CardContent';
import LogoGrid from "../logogrid";
import Footer from "../footer";
import ImageCarousel from '../imageCarousel';

export default function Home() {
    return (
        <div className="home-image-rows">
            <Grid container spacing={3} className="home-row-1">
                <Grid xs={7}>
                    <img className="home-img-1" src="../cars/old truck.png" alt="old truck"/>
                </Grid>
                <Grid xs={5}>
                    <Card className="home-card">
                        <CardContent>
                            <h2>
                                Here at Regiment Fabrication and Finishing, we pride ourselves in every job 
                                that we take on, ensuring the highest quality result while providing honest and 
                                affordable pricing! We go above and beyond expectations, to make sure you are 
                                satisfied with our services.
                            </h2>
                            <h1><i>We build customers for life!</i></h1>
                            <img src="../regiment-logos/roundlogosmall.png" />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid xs={7}>
                    <Card className="home-card">
                            <CardContent>
                                <h2>
                                    We've set up our business to cater specifically to the dealer's needs. Rapid turn around, 
                                    certified personnel, and state of the art equipment make the process as easy as dropping 
                                    off the vehicle and picking it up when it's finished. We can transform any vehicle on your 
                                    lot from the oldest to the newest. The hardest choice you have to make is which vehicle to
                                    modify first!
                                </h2>
                                <h1><i>Offering you the best service with knowledgeable staff, utilizing the highest quality products available</i></h1>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid xs={5}>
                    <img className="home-img-2" src="../cars/red toyota.png" />
                </Grid>
            </Grid>
            <h1>A few of the quality brands we use:</h1>
            <Grid container spacing={3}>
                <LogoGrid />
            </Grid>
            <Grid container spacing={3}>
                <Grid xs={4}>
                    <Card className="home-card">
                        <CardContent>
                            <h1>Hours</h1>
                            <h2>Monday-Friday<br />9AM - 5PM</h2>
                            <img className="home-img-phonenumber" src="../regiment-logos/phonenumberwhite.jpg" />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={8}>
                    <Card className="home-card">
                        <CardContent>
                            <Grid container spacing={1}>
                                <Grid xs={5} className="map-title">
                                    <h1>Come visit us!</h1>
                                    <h2><a href="https://goo.gl/maps/USNmLsW8ZjQGfYLi6" target="_blank" rel="noreferrer">8972 OH-88, Windham, OH 44288</a></h2>
                                </Grid>
                                <Grid xs={7}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.396872615177!2d-81.14874612345693!3d41.234912205438356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883115411ee73bb3%3A0x7bb4dd5f7b4e6189!2sRegiment%20Fabrication%20and%20Finish!5e0!3m2!1sen!2sus!4v1685715196565!5m2!1sen!2sus" 
                                    width="600" 
                                    height="250"
                                    title="regiment-map"
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}