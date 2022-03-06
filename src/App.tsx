import React from "react";
import styled from "styled-components";
import { Colors } from "./assets/Colors";
import Hero from "./assets/components/Hero";

const AppEl = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${Colors.White};
`;

function App() {
  return (
    <AppEl>
      <Hero />
    </AppEl>
  );
}

export default App;
