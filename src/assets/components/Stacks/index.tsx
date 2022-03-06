import { SiNextdotjs } from "react-icons/si";
import styled from "styled-components";
import StackSlider from "./StackSlider";
import { StackSliderItemProps } from "./StackSliderItem";

const AllStacks: Array<StackSliderItemProps> = [
  {
    Id: 1,
    Title: "HTML",
    Icon: SiNextdotjs,
  },
  {
    Id: 2,
    Title: "CSS",
    Icon: SiNextdotjs,
  },
  {
    Id: 3,
    Title: "ReactJs",
    Icon: SiNextdotjs,
  },
  {
    Id: 4,
    Title: "NextJs",
    Icon: SiNextdotjs,
  },
  {
    Id: 5,
    Title: "jQuery",
    Icon: SiNextdotjs,
  },
  {
    Id: 6,
    Title: "Bootstrap",
    Icon: SiNextdotjs,
  },
];

const StacksEl = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default function Stacks() {
  return (
    <StacksEl>
      <StackSlider Title="Front-End" Items={AllStacks} />
      <StackSlider Title="Back-End" Items={AllStacks} />
    </StacksEl>
  );
}
