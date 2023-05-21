import * as React from "react";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ProfilePic from "../../images/ProfilePic.png";
import "../../styles/AboutMe.css";



export default function DirectionStack() {
  return (
   

<div className="about-me font-base">
      <h2>About Me:</h2>
      <CssBaseline />
      
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Avatar
          alt="Carrie Young"
          src={ProfilePic}
          sx={{ width: 200, height: 200, opacity: 0.75 }}
        />

        <Typography className="text font-base">
          <br />
          As a recent coding boot camp graduate with 13 years of nursing
          experience. With my diverse background, I bring a unique perspective
          to software development. My nursing experience has taught me the
          importance of empathy, teamwork, and adaptability - all skills that
          translate well to software development. I'm not afraid to ask the
          tough questions and I thrive in a fast-paced environment.
          <br />
          <br />
          So, let's cut to the chase - I'm looking for a job! I'm ready to roll
          up my sleeves and get to work, and I'm confident that my skills and
          experience make me an ideal candidate for an entry-level software
          development position. If you're looking for a team player who is eager
          to learn, then look no further!
        </Typography>
      </Stack>
    </div>
  );
}
