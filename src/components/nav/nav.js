import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import "../../App.css";
import { Outlet, Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <img className="nav-logo" src="../regiment-logos/flagbackgroundlogo.jpg" />
            <Grid container spacing={1} columns={6} className="nav" display="flex" justifyContent="center" alignItems="center">
                <Grid xs="auto">
                    <Link to={`/`}><li>Home</li></Link>
                </Grid>
                <Grid xs="auto">
                    <Link to={`/services`}><li>Services</li></Link>
                </Grid>
                <Grid xs="auto">
                    <Link to={`/financing`}><li>Financing</li></Link>
                </Grid>
                <Grid xs="auto">
                    <Link to={`/business-partners`}><li>Business Partners</li></Link>
                </Grid>
                <Grid xs="auto">
                    <Link to={`/about-us`}><li>About Us</li></Link>
                </Grid>
                <Grid xs="auto">
                    <Link to={`/contact`}><li>Contact</li></Link>
                </Grid>
            </Grid>
        </>
        
    );
}