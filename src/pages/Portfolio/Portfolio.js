import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import Link from "@mui/material/Link";
import HotelCalifornia from "../../images/HotelCalifornia.png";
import Giphtionary from "../../images/Giphtionary.png";
import PwGen from "../../images/PwGen.png";
import Scheduler from "../../images/Scheduler.png";
import Weather from "../../images/Weather.png";
import { portfolioStyles } from "./styles";

export default function ActionAreaCard() {
  const [cards] = useState([
    {
      image: <CardMedia component="img" height="140" image={HotelCalifornia} />,
      title: "Hotel California",
      text: "An application designed for hotel guests, where one can easily check in/out, make a reservation, and view local entertainment options.",
      app: (
        <Link
          href="https://hotel-california-app.herokuapp.com/"
          color="inherit"
        >
          View App
        </Link>
      ),
      github: (
        <Link
          href="https://github.com/kas500/hotel-california-app"
          color="inherit"
        >
          Git Hub
        </Link>
      ),
    },
  
    {
      image: <CardMedia component="img" height="140" image={Scheduler} />,
      title: "Work Day Scheduler",
      text: "A dynamic 9hr work day scheduler, where users can ad their events during the day.",
      app: (
        <Link
          href="https://carrieky04.github.io/Work-Day-Scheduler/"
          color="inherit"
        >
          View App
        </Link>
      ),
      github: (
        <Link
          href="https://github.com/carrieky04/Work-Day-Scheduler"
          color="inherit"
        >
          Git Hub
        </Link>
      ),
    },
    
    
    
  ]);
  return (
    <Card sx={portfolioStyles.card}>
      {cards.map((card, i) => (
        <CardActionArea key={i}  >
          {card.image}
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.text}
              <br />
              {card.app}
              <br />
              {card.github}
            </Typography>
          </CardContent>
        </CardActionArea>
      ))}
    </Card>
  );
}
