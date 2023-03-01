import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Link href="Resume.pdf" color="inherit">Download My Resume</Link>
      </Container>
    </React.Fragment>
  );
}
