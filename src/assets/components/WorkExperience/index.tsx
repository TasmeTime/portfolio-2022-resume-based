import styled from "styled-components";
import StyledList from "../common/StyledList";
import { StyledListItemProps } from "../common/StyledList/StyledListItem";

const WEList: Array<StyledListItemProps> = [
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
export default function WorkExperience() {
  return <StyledList Title="Work Experience" Items={WEList} IndPos="right" />;
}
