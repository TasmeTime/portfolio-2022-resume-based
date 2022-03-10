import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import { fadeInFromBottom } from "../../Animations";
import { AllProjects } from "../../Data";
import { Colors, Devices } from "../../Theme";
import { WaterMark } from "../common/Watermark";
import ProjectItem from "./ProjectItem";

const ProjectsEl = styled.article`
  background-color: ${Colors.Primary};
  width: 100%;
  border-radius: 0 0 0 0;
  min-height: 450px;
  height: 100%;
  flex: 1;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-top: 5rem;
  position: relative;
  z-index: 1;
  height: fit-content;
  gap: 2vw;
  padding: 2rem;

  @media ${Devices.Laptop} {
    width: 90%;
    border-radius: 0 65px 65px 0;
  }

  @media ${Devices.LaptopL} {
    min-height: 650px;
  }
`;

const TitleEl = styled(motion.h3)`
  font-size: 5vw;
  z-index: 1;
  writing-mode: vertical-rl;
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
      <WaterMark bottom="0" color={Colors.PrimaryFade} right="-30%">
        Projects
      </WaterMark>
      <TitleEl
        {...fadeInFromBottom({ transition: { duration: 1, type: "tween" } })}
      >
        Projects
      </TitleEl>
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
    </ProjectsEl>
  );
}
