import {
  FireIcon,
  LocationIcon,
  MessageIcon,
  PhoneIcon,
} from "@/svgs/ContactUsSvg";

export const getInTouchCardData = [
  {
    text: "info@estatein.com",
    link: "/property",
    socialMedia: undefined,
    icon: <MessageIcon />,
  },
  {
    text: "+1 (123) 456-7890",
    link: "/property",
    socialMedia: undefined,
    icon: <PhoneIcon />,
  },
  {
    text: "Main Headquarters",
    link: "/property",
    socialMedia: undefined,
    icon: <LocationIcon />,
  },
  {
    text: null,
    socialMedia: ["Instagram", "LinkedIn", "Facebook"],
    link: "/property",
    icon: <FireIcon />,
  },
];
