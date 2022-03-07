import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "./assets/Theme";
import Hero from "./assets/components/Hero";
import { AnimatePresence, motion } from "framer-motion";
import Stacks from "./assets/components/Stacks";
import Projects from "./assets/components/Project";
import Education from "./assets/components/Education";
import WorkExperience from "./assets/components/WorkExperience";
const AppEl = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  gap: 1rem;
  background-color: ${Colors.White};
`;

function App() {
  return (
    <AppEl>
      <Hero />
      <Stacks />
      <Projects />
      <Education />
      <WorkExperience />
    </AppEl>
  );
}

export default App;
