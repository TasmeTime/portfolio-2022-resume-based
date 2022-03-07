import StyledList from "../common/StyledList";
import { StyledListItemProps } from "../common/StyledList/StyledListItem";

const EducationList: Array<StyledListItemProps> = [
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

export default function Education() {
  return <StyledList Title="Education" IndPos="left" Items={EducationList} />;
}
