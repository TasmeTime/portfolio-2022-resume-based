import styled from "styled-components";

import { FaGlobeAsia, FaGithubAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import HeroLink from "./HeroLink";
import { HeroData } from "../../Data";
import PortraitIms from "../../images/portrait.png";
import { Colors, Devices } from "../../Theme";
import { motion } from "framer-motion";

const HeroEl = styled(motion.article)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  background-color: ${Colors.Black};
  padding: 2rem 1rem;
  border-radius: 0 0 0 5rem;

  @media ${Devices.MobileL} {
    border-left-width: 0.3rem;
    border-bottom-width: 0.3rem;
    border-radius: 0 0 0 7rem;
  }

  @media ${Devices.Tablet} {
    justify-content: flex-start;
    border-left-width: 1rem;
    border-bottom-width: 1rem;
    border-radius: 0 0 0 15rem;
  }
  @media ${Devices.Laptop} {
    min-height: 100vh;
    justify-content: center;
    gap: 3rem;
  }
  @media ${Devices.LaptopL} {
    gap: 4rem;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  width: 100%;
  @media ${Devices.Tablet} {
    flex-direction: row;
    align-items: center;
  }
  @media ${Devices.Laptop} {
    gap: 2rem;
  }

  @media ${Devices.LaptopL} {
    gap: 3rem;
  }
`;
const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media ${Devices.Tablet} {
    text-align: left;
  }
`;
const Before = styled.h3`
  font-size: 4vw;
  color: ${Colors.White};
`;
const Name = styled.h1`
  font-size: 15vw;
  color: ${Colors.Primary};
  @media ${Devices.MobileL} {
    font-size: 13vw;
  }

  @media ${Devices.Tablet} {
    font-size: 10vw;
  }
`;
const After = styled(Before)``;
const ImageContainer = styled(motion.img)`
  width: 70%;
  min-width: 120px;

  @media ${Devices.Tablet} {
    width: 30%;
    min-width: 120px;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;

  a {
    text-decoration: none;
  }

  @media ${Devices.Tablet} {
    /* width: 30%; */
    /* min-width: 120px; */
  }

  @media ${Devices.Laptop} {
    /* justify-content: flex-end; */
    gap: 3rem;
  }
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
      </TopContainer>
      <LinksContainer>
        {/* <HeroLink Text="m-azad.ir" Icon={FaGlobeAsia} /> */}
        <a target="_blank" rel="nofollow" href="https://github.com/TasmeTime">
          <HeroLink Text="tasmetime" Icon={FaGithubAlt} />
        </a>
        <a target="_blank" rel="nofollow" href="mailto:info@m-azad.ir">
          <HeroLink Text="info@m-azad.ir" Icon={MdAlternateEmail} />
        </a>
        <a target="_blank" rel="nofollow" href="https://youtube.com/TasmeTime">
          <HeroLink
            Text="tasmetime"
            Icon={FiYoutube}
            // IconBgColor={Colors.Red}
            // BgColor={Colors.RedHighlight}
          />
        </a>
      </LinksContainer>
    </HeroEl>
  );
}
