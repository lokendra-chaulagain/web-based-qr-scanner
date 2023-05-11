
import { Link } from "react-router-dom";
import Facebook from "../svg/Facebook";
import Youtube from "../svg/Youtube";
import Twitter from "../svg/Twitter";
import Linkedin from "../svg/Linkedin";

const socialMediaIcons = [
  {
    name: "Facebook",
    url: "/",
    icon: <Facebook />,
  },

  {
    name: "Youtube",
    url: "/",
    icon: <Youtube />,
  },

  {
    name: "Twitter",
    url: "/",
    icon: <Twitter />,
  },

  {
    name: "Linkedin",
    url: "/",
    icon: <Linkedin />,
  },
];

export default function SocialMediaIcons() {
  return (
    <div className="mb-6 flex items-center ">
      {socialMediaIcons.map((media) => (
        <Link
          to={media.url}
          key={media.name}
          className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border  text-accent-600 hover:border-primary-600 hover:bg-primary-600 hover:text-white ">
          {media.icon}
        </Link>
      ))}
    </div>
  );
}
