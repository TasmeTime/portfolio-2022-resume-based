import styled from "styled-components";
import { BackStacks, FrontStack } from "../../Data";
import StackSlider from "./StackSlider";

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
