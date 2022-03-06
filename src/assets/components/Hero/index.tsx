import styled from "styled-components";

import { FaGlobeAsia, FaGithubAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import HeroLink from "../HeroLink";
import { HeroData } from "../../Data";
import PortraitIms from "../../images/portrait.png";
import { Colors } from "../../Colors";

const HeroEl = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  background-color: ${Colors.PrimaryBg};
  padding: 1rem 5rem;
`;
const TopContainer = styled.div`
  display: flex;
  width: 100%;
`;
const LeftSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;
const Before = styled.h3`
  font-size: 3vw;
  color: ${Colors.Gray};
`;
const Name = styled.h1`
  font-size: 10vw;
  color: ${Colors.Primary};
`;
const After = styled(Before)``;
const ImageContainer = styled.img`
  width: 30%;
  min-width: 120px;
`;
const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
`;

export default function Hero() {
  return (
    <HeroEl>
      <TopContainer>
        <LeftSection>
          <Before>{HeroData.Before}</Before>
          <Name>{HeroData.Name}</Name>
          <After>{HeroData.After}</After>
        </LeftSection>
        <ImageContainer src={PortraitIms} alt="my portrait" />
        {/* <img src={PortraitIms} alt="my portrait" /> */}
        {/* </ImageContainer> */}
      </TopContainer>
      <LinksContainer>
        <HeroLink Text="m-azad.ir" Icon={FaGlobeAsia} />
        <HeroLink Text="tasmetime" Icon={FaGithubAlt} />
        <HeroLink Text="info@m-azad.ir" Icon={MdAlternateEmail} />
        <HeroLink
          Text="tasmetime"
          Icon={FiYoutube}
          IconBgColor={Colors.Red}
          BgColor={Colors.RedHighlight}
        />
      </LinksContainer>
    </HeroEl>
  );
}
