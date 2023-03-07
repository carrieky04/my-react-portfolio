import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { footerStyles } from "./styles";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: true,
      }}
    >
      <BottomNavigation
        
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
        sx={footerStyles.link}
          href="https://github.com/carrieky04?tab=repositories"
          label="Git Hub"
          color="disabled"
          icon={<GitHubIcon />}
        />

        <BottomNavigationAction
        sx={footerStyles.link}
          href="https://www.linkedin.com/in/carrie-k-young/"
          label="LinkedIn"
          icon={<LinkedInIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
