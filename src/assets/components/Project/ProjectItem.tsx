import styled from "styled-components";
import { Colors, Devices } from "../../Theme";
export interface ProjectItemProps {
  Id: number;
  Title: string;
  Des: string;
  Link?: string;
}

const ProjectItemEl = styled.article`
  display: inline-flex;
  z-index: 1;
  gap: 2vw;
  color: ${Colors.White};
`;
const Ind = styled.span`
  @media ${Devices.Laptop} {
    width: 5vw;
  }
  width: 0.2rem;
  max-width: 0.7rem;

  background-color: ${Colors.White};
  border-radius: 30px;
`;
const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const TitleHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

const LinkEl = styled.a`
  @media ${Devices.Tablet} {
    font-size: 2.5vw;
  }
  @media ${Devices.Laptop} {
    font-size: 2vw;
  }
  text-decoration: none;
  font-size: 3vw;
`;
const DesEl = styled.p`
  @media ${Devices.Tablet} {
    font-size: 2.2vw;
  }
  @media ${Devices.Laptop} {
    font-size: 1.7vw;
  }
  color: ${Colors.GrayDes};
  font-size: 3vw;
`;
const TitleEl = styled.h5`
  @media ${Devices.Tablet} {
    font-size: 3vw;
  }
  @media ${Devices.Laptop} {
    font-size: 2.5vw;
  }
  font-size: 3.7vw;
`;
export default function ProjectItem(props: ProjectItemProps) {
  const { Id, Title, Des, Link } = props;

  return (
    <ProjectItemEl>
      <Ind />
      <InfoHolder>
        {Link ? (
          <TitleHolder>
            <TitleEl>{Title}</TitleEl>
            <LinkEl href="">({Link})</LinkEl>
          </TitleHolder>
        ) : (
          <TitleEl>{Title}</TitleEl>
        )}
        <DesEl>{Des}</DesEl>
      </InfoHolder>
    </ProjectItemEl>
  );
}
