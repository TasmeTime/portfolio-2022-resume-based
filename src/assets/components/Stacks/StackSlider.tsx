import { IconType } from "react-icons";
import styled from "styled-components";
import { SiNextdotjs } from "react-icons/si";
import StackSliderItem, { StackSliderItemProps } from "./StackSliderItem";
import { Colors, Devices } from "../../Theme";

interface StackSliderProps {
  Title: string;
  Items: Array<StackSliderItemProps>;
}
const StackSliderEl = styled.article`
  display: flex;
  flex-direction: column;
`;
const TitleEl = styled.h3`
  margin-left: 2rem;
  font-size: 7vw;

  background: -webkit-linear-gradient(
    left,
    ${Colors.Gradient.G1[0]},
    ${Colors.Gradient.G1[1]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${Devices.Laptop} {
    font-size: 5vw;
  }
`;
const ItemsHolder = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  gap: 7vw;
  scrollbar-width: 0;

  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

export default function StackSlider(props: StackSliderProps) {
  const { Title, Items } = props;
  return (
    <StackSliderEl>
      <TitleEl>{Title}</TitleEl>
      <ItemsHolder>
        {Items.map((item) => {
          return (
            <StackSliderItem
              key={item.Id}
              Id={item.Id}
              Title={item.Title}
              Icon={item.Icon}
              Color={item.Color}
              BgColor={item.BgColor}
            />
          );
        })}
      </ItemsHolder>
    </StackSliderEl>
  );
}
