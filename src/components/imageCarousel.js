import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import "../App.css";

export default function ImageCarousel() {
    return (
        <div class="carousel">
        <Carousel>
            <img src="../cars/black mustang.png" alt="black mustang"/>
            <img src="../cars/old truck.png" alt="old truck"/>
            <img src="../cars/red toyota.png" alt="red toyota"/>
            <img src="../cars/white mercades.png" alt="white mercades"/>
        </Carousel>
        </div>
    );
}