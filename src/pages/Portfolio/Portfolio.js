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
  ]);
  return (
    <Card sx={{ maxWidth: 345 }}>
      {cards.map((card, i) => (
        <CardActionArea key={i}>
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
