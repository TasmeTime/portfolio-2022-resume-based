import { SiNextdotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import {
  DiCss3,
  DiDotnet,
  DiHtml5,
  DiMongodb,
  DiPhp,
  DiNodejsSmall,
  DiJqueryLogo,
  DiBootstrap,
} from "react-icons/di";
import { SiReact, SiMicrosoftsqlserver } from "react-icons/si";
import styled from "styled-components";
import StackSlider from "./StackSlider";
import { StackSliderItemProps } from "./StackSliderItem";

const FrontStack: Array<StackSliderItemProps> = [
  {
    Id: 1,
    Title: "HTML",
    Icon: DiHtml5,
  },
  {
    Id: 2,
    Title: "CSS",
    Icon: DiCss3,
  },
  {
    Id: 3,
    Title: "ReactJs",
    Icon: SiReact,
  },
  {
    Id: 4,
    Title: "NextJs",
    Icon: SiNextdotjs,
  },
  {
    Id: 5,
    Title: "jQuery",
    Icon: DiJqueryLogo,
  },
  {
    Id: 6,
    Title: "Bootstrap",
    Icon: DiBootstrap,
  },
];

const BackStacks: Array<StackSliderItemProps> = [
  {
    Id: 1,
    Title: "ASP.NET",
    Icon: DiDotnet,
  },
  {
    Id: 2,
    Title: "NodeJs",
    Icon: DiNodejsSmall,
  },
  {
    Id: 3,
    Title: "PHP",
    Icon: DiPhp,
  },
  {
    Id: 4,
    Title: "Sql Server",
    Icon: SiMicrosoftsqlserver,
  },
  {
    Id: 5,
    Title: "MongoDb",
    Icon: DiMongodb,
  },
  {
    Id: 6,
    Title: "MySql",
    Icon: GrMysql,
  },
];

const StacksEl = styled.article`
  display: flex;
  flex-direction: column;
  gap: 5vh;
  margin-top: 2rem;
`;

export default function Stacks() {
  return (
    <StacksEl>
      <StackSlider Title="Front-End" Items={FrontStack} />
      <StackSlider Title="Back-End" Items={BackStacks} />
    </StacksEl>
  );
}
