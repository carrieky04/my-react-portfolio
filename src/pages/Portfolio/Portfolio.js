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
      image: <CardMedia component="img" height="140" image={Giphtionary} />,
      title: "Giphtionary",
      text: "Where words meets gifs. A vanilla JS app to look up word definitions that displays it's complementary GIF.",
      app: (
        <Link
          href="https://thebluwiz.github.io/Giphtionary/"
          color="inherit"
        >
          View App
        </Link>
      ),
      github: (
        <Link
          href="https://github.com/TheBluWiz/Giphtionary"
          color="inherit"
        >
          Git Hub
        </Link>
      ),
    },
    {
      image: <CardMedia component="img" height="140" image={PwGen} />,
      title: "Password Generator",
      text: "The password generators allows a user to hoose from certain character criteria and it will spit out a password between 8-128 characters.",
      app: (
        <Link
          href="https://carrieky04.github.io/Password-Generator/"
          color="inherit"
        >
          View App
        </Link>
      ),
      github: (
        <Link
          href="https://github.com/carrieky04/Password-Generator"
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
    {
      image: <CardMedia component="img" height="140" image={Weather} />,
      title: "Weather Dashboard",
      text: "This weather app allows users to search any city in the world and it will provide them with the current and upcoming 5 day forecast.",
      app: (
        <Link
          href="https://carrieky04.github.io/Weather-Dashboard/"
          color="inherit"
        >
          View App
        </Link>
      ),
      github: (
        <Link
          href="https://github.com/carrieky04/Weather-Dashboard"
          color="inherit"
        >
          Git Hub
        </Link>
      ),
    },
    {
      image: <CardMedia component="img" height="140" image="COMING SOON!" />,
      title: "Endoscopy Procedure",
      text: "Currently working on an app for patients who are going to be getting an endoscopy. The app will provide education for all types of endoscopies, pre-op and post op instructions, arrival time, and approximate time of stay at hospital. "
    },
    
    
  ]);
  return (
    <Card >
      {cards.map((card, i) => (
        <CardActionArea key={i} sx={portfolioStyles.card} >
          {card.image}
          <CardContent>
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
  // return (
  //   <Card sx={{ maxWidth: 345 }}>
  //     <CardActionArea>
  //       <CardMedia
  //         component="img"
  //         height="140"
  //         image={HotelCalifornia}
  //       />
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="div">
  //           Hotel California
  //         </Typography>
  //         <Typography variant="body2" color="text.secondary">
  //           An application designed for hotel guests, where one can easily check in/out, make a reservation, and view local entertainment options.
  //           <br />
  //         <Link href="https://hotel-california-app.herokuapp.com/" color="inherit">View App</Link>
  //         <br />
  //         <Link href="https://github.com/kas500/hotel-california-app" color="inherit">Git Hub</Link>
  //         </Typography>
  //       </CardContent>
  //     </CardActionArea>
  //   </Card>
  // );
}
