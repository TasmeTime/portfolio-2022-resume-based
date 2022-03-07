import { ProjectItemProps } from "./components/Project/ProjectItem";
import { StackSliderItemProps } from "./components/Stacks/StackSliderItem";
import { SiNextdotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import {
  DiCss3,
  DiDotnet,
  DiHtml5,
  DiMongodb,
  DiPhp,
  DiNodejsSmall,
  DiJqueryLogo,
  DiBootstrap,
} from "react-icons/di";
import { SiReact, SiMicrosoftsqlserver } from "react-icons/si";
import { StyledListItemProps } from "./components/common/StyledList/StyledListItem";

interface HeroProps {
  Before: string;
  Name: string;
  AKA: string;
  After: string;
}

export const HeroData: HeroProps = {
  Before: "Hi, I'm",
  Name: "Shahin",
  AKA: "TasmeTime",
  After: "Full-Stack Web Developer",
};

export const AllProjects: Array<ProjectItemProps> = [
  {
    Id: 1,
    Title: "AkSeller",
    Des: "CRM, Seller Dashboard, Admin Panel, and exclusive build-in shop",
    Link: "akseller.ir",
  },
  {
    Id: 2,
    Title: "View360",
    Des: "Online showcase of properties in 360 tours",
    Link: "view360.ir",
  },
  {
    Id: 3,
    Title: "NFT Marketplace UI Implementation",
    Des: "UI Implementation of NFT Marketplace using React and Styled-Components",
    Link: "crypto.com",
  },
  {
    Id: 4,
    Title: "NFT Marketplace UI Implementation",
    Des: "UI Implementation of NFT Marketplace using React and Styled-Components",
    Link: "crypto.com",
  },
  {
    Id: 5,
    Title: "NFT Marketplace UI Implementation",
    Des: "UI Implementation of NFT Marketplace using React and Styled-Components",
    Link: "crypto.com",
  },
  {
    Id: 6,
    Title: "NFT Marketplace UI Implementation",
    Des: "UI Implementation of NFT Marketplace using React and Styled-Components",
    Link: "crypto.com",
  },
  {
    Id: 7,
    Title: "NFT Marketplace UI Implementation",
    Des: "UI Implementation of NFT Marketplace using React and Styled-Components",
    Link: "crypto.com",
  },
];

export const FrontStack: Array<StackSliderItemProps> = [
  {
    Id: 1,
    Title: "HTML",
    Icon: DiHtml5,
  },
  {
    Id: 2,
    Title: "CSS",
    Icon: DiCss3,
  },
  {
    Id: 3,
    Title: "ReactJs",
    Icon: SiReact,
  },
  {
    Id: 4,
    Title: "NextJs",
    Icon: SiNextdotjs,
  },
  {
    Id: 5,
    Title: "jQuery",
    Icon: DiJqueryLogo,
  },
  {
    Id: 6,
    Title: "Bootstrap",
    Icon: DiBootstrap,
  },
];

export const BackStacks: Array<StackSliderItemProps> = [
  {
    Id: 1,
    Title: "ASP.NET",
    Icon: DiDotnet,
  },
  {
    Id: 2,
    Title: "NodeJs",
    Icon: DiNodejsSmall,
  },
  {
    Id: 3,
    Title: "PHP",
    Icon: DiPhp,
  },
  {
    Id: 4,
    Title: "Sql Server",
    Icon: SiMicrosoftsqlserver,
  },
  {
    Id: 5,
    Title: "MongoDb",
    Icon: DiMongodb,
  },
  {
    Id: 6,
    Title: "MySql",
    Icon: GrMysql,
  },
];

export const EducationList: Array<StyledListItemProps> = [
  {
    Id: 1,
    Title: "Mollassadra Technical College",
    SubTitle: "Associate of Software Engineering",
    From: new Date("2016"),
    To: new Date("2018"),
    TillPresent: false,
  },
  {
    Id: 2,
    Title: "Shamsipour Technical and Vocational College",
    SubTitle: "Bachelor of Software Engineering",
    Des: "Some des here",
    From: new Date("2019"),
    TillPresent: true,
  },
];

export const WEList: Array<StyledListItemProps> = [
  {
    Id: 1,
    Title: "Freelancer and Tutor on Youtube",
    From: new Date("2021"),
    TillPresent: true,
  },
  {
    Id: 2,
    Title: "IranMoein Insurance",
    SubTitle: "Private Web Application Developer & ICT Expert",
    From: new Date("2019"),
    To: new Date("2020"),
    TillPresent: false,
  },
  {
    Id: 3,
    Title: "Meysam.Shop",
    SubTitle: "CTO",
    From: new Date("2017"),
    To: new Date("2019"),
    TillPresent: false,
  },
  {
    Id: 4,
    Title: "Moobmoo.com",
    SubTitle: "Online Teacher (android, unity game engine courses)",
    From: new Date("2017"),
    To: new Date("2017"),
    TillPresent: false,
  },
  {
    Id: 5,
    Title: "Ministry of Education",
    SubTitle: "High-School's Internship",
    TillPresent: false,
  },
  {
    Id: 3,
    Title: "Meysam.Shop",
    SubTitle: "IT and Content Creator Internship",
    TillPresent: false,
  },
];
