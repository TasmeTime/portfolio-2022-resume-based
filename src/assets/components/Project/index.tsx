import styled from "styled-components";
import { Colors } from "../../Colors";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";
const AllProjects: Array<ProjectItemProps> = [
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
];
const ProjectsEl = styled.article`
  background-color: ${Colors.Primary};
  width: 95%;
  border-radius: 0 65px 65px 0;
  min-height: 450px;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  flex-direction: column;
  position: relative;
  z-index: 1;
  gap: 0.77rem;
  padding: 2rem;
`;

const TitleEl = styled.h3`
  /* position: sticky;
  top: 0; */
  z-index: 1;
`;

const ProjectsHolder = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  z-index: 1;
`;
const WaterMark = styled.div`
  position: absolute;
  left: 0;
  top: 20%;
  font-size: 10rem;
  font-weight: bold;
  transform: rotate(20deg);
  color: ${Colors.PrimaryFade};
`;

export default function Projects() {
  return (
    <ProjectsEl>
      <WaterMark>Projects</WaterMark>
      <TitleEl>Projects</TitleEl>
      {AllProjects.map((p) => {
        return (
          <ProjectItem
            key={p.Id}
            Id={p.Id}
            Title={p.Title}
            Des={p.Des}
            Link={p.Link}
          />
        );
      })}
      {/* <ProjectsHolder>
      </ProjectsHolder> */}
    </ProjectsEl>
  );
}
