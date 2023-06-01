import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import "../../App.css";

export default function Nav() {
    return (
        <>
            <h1 className="nav-title">Regiment Fabrication and Finishing</h1>
            <Grid container spacing={1} columns={6} className="nav" display="flex" justifyContent="center" alignItems="center">
                <Grid xs="auto">
                    <li>Home</li>
                </Grid>
                <Grid xs="auto">
                    <li>Services</li> 
                </Grid>
                <Grid xs="auto">
                    <li>Financing</li>
                </Grid>
                <Grid xs="auto">
                    <li>Business Partners</li>
                </Grid>
                <Grid xs="auto">
                    <li>About Us</li>
                </Grid>
                <Grid xs="auto">
                    <li>Contact</li>
                </Grid>
            </Grid>
        </>
        
    );
}