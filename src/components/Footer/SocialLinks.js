import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Stack from "@mui/material/Stack";

const SocialLinks = () => {
  return (
    <div>
      <ul>
        <Stack direction="row" justifyContent="center">
          <li>
            <a href="https://www.linkedin.com/in/carrie-k-young/">
              <>
                <FaLinkedin size={30} />
              </>
            </a>
          </li>
          <li>
            <a href="https://github.com/carrieky04?tab=repositories">
              <>
                <FaGithub size={30} />
              </>
            </a>
          </li>
          <li>
            <a href="mailto:foo@gmail.com">
              <>
                <HiOutlineMail size={30} />
              </>
            </a>
          </li>
        </Stack>
      </ul>
    </div>
  );
};

export default SocialLinks;
