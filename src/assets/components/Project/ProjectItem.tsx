import styled from "styled-components";
import { Colors } from "../../Colors";
export interface ProjectItemProps {
  Id: number;
  Title: string;
  Des: string;
  Link?: string;
}

const ProjectItemEl = styled.article`
  display: flex;
  /* flex-direction: column; */
  height: fit-content;
  z-index: 1;
  gap: 0.7rem;
  color: ${Colors.White};
`;
const Ind = styled.span`
  width: 0.5rem;
  max-width: 0.7em;
  height: 100%;
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
const TitleEl = styled.h5`
  font-size: 1.2rem;
`;
const DesEl = styled.p`
  color: ${Colors.GrayDes};
`;
const LinkEl = styled.a`
  text-decoration: none;
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
