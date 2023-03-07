import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ProfilePic from '../../images/ProfilePic.png';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Avatar alt="Remy Sharp" src={ProfilePic} sx={{ width: 90, height: 90}}/>
        <Typography>
        <br />
        As a recent coding boot camp graduate with 13 years of nursing experience. With my diverse background, I bring a unique perspective to software development in the healthcare tech industry. My nursing experience has taught me the importance of empathy, teamwork, and adaptability - all skills that translate well to software development. I'm not afraid to ask the tough questions or challenge the status quo, and I thrive in a fast-paced environment.
        <br />
        <br />
As a lifelong learner and problem-solver, I am constantly seeking new challenges and opportunities to grow. I am passionate about technology and its potential to improve patient care and outcomes, and I am eager to contribute my skills and expertise to this exciting field.
<br />
<br />
So, let's cut to the chase - I'm looking for a job! I'm ready to roll up my sleeves and get to work, and I'm confident that my skills and experience make me an ideal candidate for an entry-level software development position in the healthcare tech industry. If you're looking for a team player who can code with the best of them and keep the office entertained with some nursing jokes, then look no further!
<br />
<br />
In all seriousness, I would love the opportunity to chat with you about how I can contribute to your team and make a difference in the healthcare industry. So, let's connect and make it happen!
        </Typography>
      </Container>
    </React.Fragment>
  );
}