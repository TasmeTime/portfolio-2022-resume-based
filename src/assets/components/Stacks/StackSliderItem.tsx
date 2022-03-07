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

const StackSliderItemEl = styled.div`
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
  color: ${Colors.Gray};
  background-color: ${Colors.PrimaryBg};
  border-radius: 10px;
  font-size: 15vw;
  border: 1px solid ${Colors.StackSliderItemBorder};

  h4 {
    font-size: 4vw;
  }

  @media ${Devices.Tablet} {
    min-width: 30vw;
    min-height: 30vw;
    svg {
      font-size: 15vw;
    }
    h4 {
      font-size: 4vw;
    }
  }

  @media ${Devices.Laptop} {
    min-width: 15vw;
    min-height: 15vw;
    svg {
      font-size: 10vw;
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
    <StackSliderItemEl>
      <Icon />
      <TitleEl>{Title}</TitleEl>
    </StackSliderItemEl>
  );
}
