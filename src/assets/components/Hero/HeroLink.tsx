import styled from "styled-components";
import { IconType } from "react-icons";
import { Colors } from "../../Theme";
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
  background-color: ${(p) => (p.bgcolor ? p.bgcolor : Colors.Primary)};
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding-right: 0.25rem;
`;

const IconHolder = styled.span<{
  bgcolor?: string;
  color?: string;
}>`
  display: flex;
  font-size: 2.5vw;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 0.3rem;
  border-radius: 5px;
  color: ${(p) => (p.color ? p.color : Colors.White)};
  background-color: ${(p) => (p.bgcolor ? p.bgcolor : Colors.PrimaryDark)};
`;

const TextHolder = styled(motion.span)`
  font-size: 2.5vw;
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
