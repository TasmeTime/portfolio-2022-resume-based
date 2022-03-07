import { IconType } from "react-icons";
import styled from "styled-components";
import { Colors } from "../../Theme";
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
  min-width: 6rem;
  min-height: 6rem;
  gap: 0.5rem;
  color: ${Colors.Gray};
  background-color: ${Colors.PrimaryBg};
  border-radius: 10px;
  border: 1px solid ${Colors.StackSliderItemBorder};

  svg {
    font-size: 2.5rem;
  }
`;
const TitleEl = styled.h4`
  font-size: 1.05rem;
  font-weight: 500;
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
