import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialShare = [
  {
    iconName: "github",
    link: "https://www.facebook.com/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        <a target='_blank' href="https://github.com/Vour123" ><GitHubIcon className='icon-about'/></a>
        <a target='_blank' href="https://www.linkedin.com/in/jose-cantu-91362a1a9/" ><LinkedInIcon className='icon-about'/></a>
      </ul>
    </>
  );
};

export default Social;
