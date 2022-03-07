import styled from "styled-components";
import { Colors } from "../../../Theme";
import StyledListItem, { StyledListItemProps } from "./StyledListItem";

export interface StyledListProps {
  Title: string;
  Items: Array<StyledListItemProps>;
  IndPos?: "left" | "right";
}

const StyledListEl = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  /* padding: 2rem 1rem 2rem 3rem; */
  padding: 2rem 2rem;
  gap: 1rem;
`;
const Ind = styled.span<{ indRight?: boolean }>`
  position: absolute;
  ${(p) => (p.indRight ? "right:0;" : "left:0;")}
  top: 2.15rem;
  border-radius: ${(p) => (p.indRight ? "5px 0 0 5px" : "0 5px 5px 0")};
  width: 2rem;
  height: 1.5rem;
  background-color: ${Colors.Primary};
`;
const TitleEl = styled.h3<{ indRight?: boolean }>`
  color: ${Colors.Primary};
  font-size: 1.3rem;
  ${(p) => (p.indRight ? "margin-left: auto;" : "")}
  ${(p) => (p.indRight ? "padding-right: 1rem;" : "padding-left: 1rem;")};
`;
const ItemsHolder = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function StyledList(props: StyledListProps) {
  const { Title, Items, IndPos } = props;
  console.log(IndPos, IndPos === "right");

  return (
    <StyledListEl>
      {/* <WaterMark color={Colors.GrayFade}>StyledList</WaterMark> */}
      <Ind indRight={IndPos === "right"} />
      <TitleEl indRight={IndPos === "right"}>{Title}</TitleEl>
      <ItemsHolder>
        {Items.map((item) => {
          return <StyledListItem key={item.Id} {...item} />;
        })}
      </ItemsHolder>
    </StyledListEl>
  );
}
