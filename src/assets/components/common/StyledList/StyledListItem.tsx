import styled from "styled-components";
import { Colors, Devices } from "../../../Theme";

export interface StyledListItemProps {
  Id: number;
  Title: string;
  SubTitle?: string;
  Des?: string;
  From?: Date;
  To?: Date;
  TillPresent?: boolean;
}

const StyledListItemEl = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Ind = styled.span`
  width: 0.5rem;
  min-width: 0.5rem;
  height: 0.5rem;
  min-height: 0.5rem;
  border-radius: 50%;
  background-color: ${Colors.Gray};
`;

const TitleHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TitleEl = styled.h5`
  font-size: 1.1rem;
  font-weight: 600;
  flex: 1;
  font-size: 3.5vw;

  @media ${Devices.Tablet} {
    font-size: 3vw;
  }
`;
const DateHolder = styled.span`
  display: flex;
  gap: 0.25rem;

  font-weight: 500;
  font-size: 3vw;

  @media ${Devices.Tablet} {
    font-size: 2.5vw;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  color: ${Colors.Gray};
  font-weight: 500;
`;
const SubTitleEl = styled.h6`
  font-size: 2.7vw;

  @media ${Devices.Tablet} {
    font-size: 2.2vw;
  }
  font-weight: 500;
`;
const DesEl = styled.p`
  @media ${Devices.Tablet} {
    font-size: 2.2vw;
  }
  font-weight: 500;
`;

export default function StyledListItem(props: StyledListItemProps) {
  const { Id, Title, SubTitle, Des, From, To, TillPresent } = props;
  return (
    <StyledListItemEl>
      <TitleHolder>
        <Ind />
        <TitleEl>{Title}</TitleEl>
        <DateHolder>
          {From ? <span>{From?.getFullYear()}</span> : ""}-
          {TillPresent ? (
            <span>Presents</span>
          ) : (
            <span>{To?.getFullYear()}</span>
          )}
        </DateHolder>
      </TitleHolder>
      <Info>
        <SubTitleEl>{SubTitle}</SubTitleEl>
        {Des ? <DesEl>{Des}</DesEl> : ""}
      </Info>
    </StyledListItemEl>
  );
}
