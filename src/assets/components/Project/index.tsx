import styled from "styled-components";
import { Colors, Devices } from "../../Theme";
import { WaterMark } from "../common/Watermark";
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
const ProjectsEl = styled.article`
  background-color: ${Colors.Primary};
  width: 100%;
  border-radius: 0 0 0 0;
  min-height: 450px;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-top: 2rem;

  /* flex-direction: column; */
  position: relative;
  z-index: 1;
  height: fit-content;
  gap: 2vw;
  padding: 2rem;

  @media ${Devices.Laptop} {
    width: 90%;
    border-radius: 0 65px 65px 0;
  }
`;

const TitleEl = styled.h3`
  font-size: 5vw;

  z-index: 1;
  writing-mode: vertical-rl;
  /* text-orientation: upright; */
`;

const ProjectsHolder = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  gap: 4.5vh;
  position: relative;
  z-index: 1;

  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

export default function Projects() {
  return (
    <ProjectsEl>
      <WaterMark bottom="0" right="-30%">
        Projects
      </WaterMark>
      <TitleEl>Projects</TitleEl>
      <ProjectsHolder>
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
      </ProjectsHolder>
      {/* <ProjectsHolder>
      </ProjectsHolder> */}
    </ProjectsEl>
  );
}
