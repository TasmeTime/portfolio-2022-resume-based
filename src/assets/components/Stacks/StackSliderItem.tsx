import { motion } from "framer-motion";
import { IconType } from "react-icons";
import styled from "styled-components";
import { Colors, Devices } from "../../Theme";
export interface StackSliderItemProps {
  Id: number;
  Title: string;
  Icon: IconType;
  Color?: string;
  BgColor?: string;
  IconSize?: string;
}

const StackSliderItemEl = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* max-width: 35vw; */
  /* max-height: 30vw; */
  min-width: 30vw;
  min-height: 30vw;
  gap: 1vh;
  padding: 0.5vw;
  color: ${Colors.Secondary};
  background-color: ${Colors.Primary};
  border-radius: 10px;
  font-size: 15vw;
  border: 1px solid ${Colors.StackSliderItemBorder};

  h4 {
    font-size: 4vw;
  }

  @media ${Devices.Tablet} {
    min-width: 20vw;
    min-height: 20vw;
    svg {
      font-size: 10vw;
    }
    h4 {
      font-size: 2.7vw;
    }
  }

  @media ${Devices.Laptop} {
    min-width: 13vw;
    min-height: 13vw;
    svg {
      font-size: 8vw;
    }
    h4 {
      font-size: 2vw;
    }
  }
`;
const TitleEl = styled.h4`
  font-weight: 600;
`;

export default function StackSliderItem(props: StackSliderItemProps) {
  const { Id, Title, Icon, Color, BgColor, IconSize } = props;
  return (
    <StackSliderItemEl
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, type: "tween" }}
    >
      <Icon />
      <TitleEl>{Title}</TitleEl>
    </StackSliderItemEl>
  );
}
