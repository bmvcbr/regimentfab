import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function LogoGrid() {
    return (
        <Grid container spacing={1} columns={16} className="logo-container" display="flex" justifyContent="center" alignItems="center">
            <Grid xs={2}>
                <img src="../brand-logos/americanforce.png" alt="American Force logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/BF_Goodrich.png" alt="BF Goodrich logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/Fuel-Forged.png" alt="Fuel Forged logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/goodyear.png" alt="Goodyear logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/kmc-wheels.png" alt="KMC Wheels logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/maxxis.png" alt="Maxxis Logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/mickeythompson.png" alt="Mickey Thompson logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/motometal.png" alt="Moto Metal logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/Nexen-Tire.png" alt="Nexen Tire logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/rancho.png" alt="Rancho logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/roughcountry.png" alt="Rough Country logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/skyjacker.png" alt="Skyjacker logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/SuperLift.png" alt="Super Lift logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/team-hercules.png" alt="Team Hercules logo" />
            </Grid>
            <Grid xs={2}>
                <img src="../brand-logos/tis-wheels.png" alt="TIS Wheels logo" />
            </Grid>
        </Grid>
    );
}