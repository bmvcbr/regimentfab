import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import "../App.css";
import Button from '@mui/material/Button';

export default function Footer() {
    return(
        <Grid container spacing={3} className="footer">
            <Grid xs={4}>
                <img src="../socials/regimentlogo.png" alt="Regiment Fabrication and Finish logo" />
            </Grid>
            <Grid xs={4}>
                <Grid container spacing={1} className="footer-socials">
                    <a href="https://www.facebook.com/RegimentCompany/?eid=ARAo4eSHzicv6py2s_ECx6uyy1yD_bvV05WDS7hhpOTOA-BcbAAn87gnN3eM8JPdYTS6lZYBz97Ytg4e" target="_blank" rel="noreferrer"><img src="../socials/facebook.png" alt="Facebook logo" /></a>
                    <a href="https://www.instagram.com/regimentfab/" target="_blank" rel="noreferrer"><img src="../socials/instagram.png" alt="Instagram logo"/></a>
                </Grid>
            </Grid>
            <Grid xs={4} className="footer-button-group">
                <Button variant="contained">Email</Button>
                <Button variant="contained">Phone</Button>
                <Button variant="contained">Address</Button>
            </Grid>
        </Grid>
    );
}