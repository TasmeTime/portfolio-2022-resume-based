import styled from "styled-components";
import { IconType } from "react-icons";
import { Colors, Devices } from "../../Theme";
import { motion } from "framer-motion";

interface HeroLinkProps {
  Text: string;
  Icon: IconType;
  Delay?: number;
  Color?: string;
  BgColor?: string;
  IconBgColor?: string;
  IconColor?: string;
}

interface IconHolderProps {
  color: string;
  bgColor: string;
}

const HeroLinkEl = styled(motion.span)<{
  bgcolor?: string;
  color?: string;
}>`
  color: ${(p) => (p.color ? p.color : Colors.White)};
  background-color: ${(p) => (p.bgcolor ? p.bgcolor : Colors.GrayBG)};
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: nowrap;

  @media ${Devices.Tablet} {
    padding-right: 0.7rem;
  }

  @media ${Devices.Laptop} {
    gap: 0.5rem;
  }
`;

const IconHolder = styled.span<{
  bgcolor?: string;
  color?: string;
}>`
  display: flex;
  font-size: 6.5vw;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  color: ${(p) => (p.color ? p.color : Colors.Black)};
  background-color: ${(p) => (p.bgcolor ? p.bgcolor : Colors.Secondary)};

  @media ${Devices.Tablet} {
    border-radius: 5px 0 0 5px;
    font-size: 3vw;
    padding: 0.7rem;
  }

  @media ${Devices.Laptop} {
    font-size: 2.3vw;
  }
`;

const TextHolder = styled(motion.span)`
  font-size: 3vw;
  display: none;
  white-space: nowrap;
  @media ${Devices.MobileL} {
    font-size: 2.7vw;
  }
  @media ${Devices.Tablet} {
    display: inline-block;
  }
  @media ${Devices.Laptop} {
    font-size: 2.3vw;
  }
`;

const Animations = {
  fadeInFromRight: {
    inital: {
      opacity: 0,
      // scale: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      // scale: 1,
      x: 0,
    },
  },
};

export default function HeroLink(props: HeroLinkProps) {
  const { Text, Icon, Delay, Color, BgColor, IconBgColor, IconColor } = props;

  return (
    <HeroLinkEl
      color={Color}
      bgcolor={BgColor}
      variants={Animations.fadeInFromRight}
      transition={{ duration: 0.7, delay: Delay ? Delay + 1 : 1 }}
      initial="inital"
      animate="animate"
    >
      <IconHolder color={IconColor} bgcolor={IconBgColor}>
        <Icon />
      </IconHolder>
      <TextHolder>{Text}</TextHolder>
    </HeroLinkEl>
  );
}
