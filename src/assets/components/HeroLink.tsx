import styled from "styled-components";
import { IconType } from "react-icons";
import { Colors } from "../Colors";

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

const HeroLinkEl = styled.span<{
  bgColor?: string;
  color?: string;
}>`
  color: ${(p) => (p.color ? p.color : Colors.White)};
  background-color: ${(p) => (p.bgColor ? p.bgColor : Colors.Primary)};
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding-right: 0.25rem;
`;

const IconHolder = styled.span<{
  bgColor?: string;
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
  background-color: ${(p) => (p.bgColor ? p.bgColor : Colors.PrimaryDark)};
`;

const TextHolder = styled.span`
  font-size: 2.5vw;
`;

export default function HeroLink(props: HeroLinkProps) {
  const { Text, Icon, Color, BgColor, IconBgColor, IconColor } = props;
  return (
    <HeroLinkEl color={Color} bgColor={BgColor}>
      <IconHolder color={IconColor} bgColor={IconBgColor}>
        <Icon />
      </IconHolder>
      <TextHolder>{Text}</TextHolder>
    </HeroLinkEl>
  );
}
