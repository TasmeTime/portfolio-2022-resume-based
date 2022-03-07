import styled from "styled-components";
import { Colors } from "../../Colors";
export interface EducationListItemProps {
  Id: number;
  Location: string;
  Title: string;
  Des?: string;
  From: Date;
  To?: Date;
  TillPresent: boolean;
}
const EducationListItemEl = styled.li`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  gap: 0.5rem;
`;
const Ind = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${Colors.Gray};
`;

const TitleHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LocationEl = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
`;
const DateHolder = styled.span`
  display: flex;
  gap: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  color: ${Colors.Gray};
  font-weight: 500;
`;
const TitleEl = styled.h6`
  font-size: 1rem;
  font-weight: 500;
`;
const DesEl = styled.p``;
const FromEl = styled.span``;
const ToEl = styled.span``;

export default function EducationListItem(props: EducationListItemProps) {
  const { Id, Location, Title, Des, From, To, TillPresent } = props;
  return (
    <EducationListItemEl>
      <TitleHolder>
        <Ind />
        <LocationEl>{Title}</LocationEl>

        <DateHolder>
          <span>{From.getFullYear()}</span>-
          <span>{TillPresent ? "Presents" : To?.getFullYear()}</span>
        </DateHolder>
      </TitleHolder>
      <Info>
        <TitleEl>{Title}</TitleEl>
        {Des ? <DesEl>{Des}</DesEl> : ""}
      </Info>
    </EducationListItemEl>
  );
}
