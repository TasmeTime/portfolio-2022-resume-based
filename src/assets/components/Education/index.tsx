import styled from "styled-components";
import { Colors } from "../../Colors";
import { WaterMark } from "../common/Watermark";
import EducationListItem, { EducationListItemProps } from "./EducationListItem";

const EducationList: Array<EducationListItemProps> = [
  {
    Id: 1,
    Location: "Mollassadra Technical College",
    Title: "Associate of Software Engineering",
    From: new Date(),
    To: new Date(),
    TillPresent: false,
  },
  {
    Id: 2,
    Location: "Shamsipour Technical and Vocational College",
    Title: "Bachelor of Software Engineering",
    Des: "Some des here",
    From: new Date(),
    TillPresent: true,
  },
];

const EducationEl = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 2rem 3rem;
  gap: 1rem;
`;
const Ind = styled.span`
  position: absolute;
  left: 0;
  top: 2.15rem;
  border-radius: 0 5px 5px 0;
  width: 2rem;
  height: 1.5rem;
  background-color: ${Colors.Primary};
`;
const TitleEl = styled.h3`
  color: ${Colors.Primary};
`;
const ItemsHolder = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function Education() {
  return (
    <EducationEl>
      {/* <WaterMark color={Colors.GrayFade}>Education</WaterMark> */}
      <Ind />
      <TitleEl>Education</TitleEl>
      <ItemsHolder>
        {EducationList.map((edu) => {
          return <EducationListItem key={edu.Id} {...edu} />;
        })}
      </ItemsHolder>
    </EducationEl>
  );
}
