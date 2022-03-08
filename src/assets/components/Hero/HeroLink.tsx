import styled from "styled-components";
import { IconType } from "react-icons";
import { Colors, Devices } from "../../Theme";
import { motion } from "framer-motion";

interface HeroLinkProps {
  Text: string;
  Icon: IconType;

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

export default function HeroLink(props: HeroLinkProps) {
  const { Text, Icon, Color, BgColor, IconBgColor, IconColor } = props;
  return (
    <HeroLinkEl
      color={Color}
      bgcolor={BgColor}
      transition={{ duration: 0.5 }}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <IconHolder color={IconColor} bgcolor={IconBgColor}>
        <Icon />
      </IconHolder>
      <TextHolder
        exit={{ left: -200 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {Text}
      </TextHolder>
    </HeroLinkEl>
  );
}
