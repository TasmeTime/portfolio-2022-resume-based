import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "./assets/Colors";
import Hero from "./assets/components/Hero";
import { AnimatePresence, motion } from "framer-motion";
import Stacks from "./assets/components/Stacks";
const AppEl = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  background-color: ${Colors.White};
`;

function App() {
  return (
    <AppEl>
      <Hero />
      <Stacks />
    </AppEl>
  );
}

export default App;
