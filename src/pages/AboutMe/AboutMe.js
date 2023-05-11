// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Avatar from "@mui/material/Avatar";
// import ProfilePic from "../../images/ProfilePic.png";
// import "../AboutMe/styles.css";

// export default function SimpleContainer() {
//   return (
//     <div className="text-box">
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Avatar
//           alt="Carrie Young"
//           src={ProfilePic}
//           sx={{ width: 90, height: 90 }}
//         />
//         <Typography>
//           <br />
//           As a recent coding boot camp graduate with 13 years of nursing
//           experience. With my diverse background, I bring a unique perspective
//           to software development. My nursing experience has taught me the
//           importance of empathy, teamwork, and adaptability - all skills that
//           translate well to software development. I'm not afraid to ask the
//           tough questions and I thrive in a fast-paced environment.
//           <br />
//           <br />
//           So, let's cut to the chase - I'm looking for a job! I'm ready to roll
//           up my sleeves and get to work, and I'm confident that my skills and
//           experience make me an ideal candidate for an entry-level software
//           development position. If you're looking for a team player who is eager
//           to learn, then look no further!

//         </Typography>
//       </Container>
//     </div>
//   );
// }

import * as React from "react";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ProfilePic from "../../images/ProfilePic.png";

export default function DirectionStack() {
  return (
    <div>
      <CssBaseline />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Avatar
          alt="Carrie Young"
          src={ProfilePic}
          sx={{ width: 90, height: 90 }}
        />

        <Typography>
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
