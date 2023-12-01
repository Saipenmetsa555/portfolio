import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArchitectureIcon from "@mui/icons-material/Architecture";
//import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactsIcon from "@mui/icons-material/Contacts";
//import GroupIcon from "@mui/icons-material/Group";
//import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InfoIcon from "@mui/icons-material/Info";
export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "About",
    icon: <InfoIcon />,
    link: "/Biography",
  },
  {
    title: "Skills",
    icon: <ArchitectureIcon />,
    link: "/Skill",
  },
  {
    title: "Contact",
    icon: <ContactsIcon />,
    link: "/Contact",
  },
];
