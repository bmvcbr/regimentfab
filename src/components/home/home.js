import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CardContent from '@mui/material/CardContent';
import LogoGrid from "../logogrid";

export default function Home() {
    return (
        <div className="home-image-rows">
            <Grid container spacing={3}>
                <Grid xs={4}>

                </Grid>
                <Grid xs={8}>
                    <Card className="home-card">
                        <CardContent>
                            <h2>
                                Here at Regiment Fabrication and Finishing, we pride ourselves in every job 
                                that we take on, ensuring the highest quality result while providing honest and 
                                affordable pricing! We go above and beyond expectations, to make sure you are 
                                satisfied with our services.
                            </h2>
                            <h1><i>We build customers for life!</i></h1>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid xs={8}>
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
                <Grid xs={4}>

                </Grid>
            </Grid>
            <h1>Supported by brands like...</h1>
            <Grid container spacing={3}>
                <LogoGrid />
            </Grid>

        </div>
    );
}