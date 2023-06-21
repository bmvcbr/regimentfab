import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import imageList from "../imageList";
import "../App.css";

export default function LogoGrid() {
    return (
        <div className="logo-grid">
            <Grid container spacing={1} columns={16} className="logo-container" display="flex" justifyContent="center" alignItems="center">
                    {imageList.map((image) => (
                        <Grid xs={2} className="logo-container-individual">
                            <img key={image.id} src={image.src} alt={image.alt} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    );
}