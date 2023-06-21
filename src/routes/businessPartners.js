import Nav from "../components/nav/nav";
import LogoGrid from "../components/logogrid";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function BusinessPartners() {
    return (
      <>
        <Nav />
        <h1 className="page-title">Business Partners</h1>
        <h1 className="page-title">A few of the quality brands we use:</h1>
        <LogoGrid />
      </>
    )
}