import styled from "styled-components";
import { Colors } from "../../../Theme";
import { WaterMark, WaterMarkProps } from "../Watermark";
import StyledListItem, { StyledListItemProps } from "./StyledListItem";

export interface StyledListProps {
  Title: string;
  Items: Array<StyledListItemProps>;
  IndPos?: "left" | "right";
  Watermark?: string;
  WMProps?: WaterMarkProps;
}

const StyledListEl = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  overflow-x: hidden;
  height: fit-content;
  overflow-y: hidden;
  padding: 5vw 2rem 2rem 2rem;
  gap: 1rem;
`;
const Ind = styled.span<{ indRight?: boolean }>`
  position: absolute;
  ${(p) => (p.indRight ? "right:0;" : "left:0;")}
  top: 5.5vw;
  border-radius: ${(p) => (p.indRight ? "5px 0 0 5px" : "0 5px 5px 0")};
  width: 2rem;
  height: 6vw;
  background-color: ${Colors.Primary};
  z-index: 1;
`;
const TitleEl = styled.h3<{ indRight?: boolean }>`
  color: ${Colors.Primary};
  z-index: 1;
  font-size: 5vw;
  ${(p) => (p.indRight ? "margin-left: auto;" : "")}
  ${(p) => (p.indRight ? "padding-right: 1rem;" : "padding-left: 1rem;")};
`;
const ItemsHolder = styled.ul`
  list-style: none;
  display: flex;
  z-index: 1;
  flex-direction: column;
  gap: 1rem;
`;

export default function StyledList(props: StyledListProps) {
  const { Title, Items, IndPos, Watermark, WMProps } = props;

  return (
    <div>
      <StyledListEl>
        {Watermark ? <WaterMark {...WMProps}>{Watermark}</WaterMark> : ""}

        <Ind indRight={IndPos === "right"} />
        <TitleEl indRight={IndPos === "right"}>{Title}</TitleEl>
        <ItemsHolder>
          {Items.map((item) => {
            return <StyledListItem key={item.Id} {...item} />;
          })}
        </ItemsHolder>
      </StyledListEl>
    </div>
  );
}
