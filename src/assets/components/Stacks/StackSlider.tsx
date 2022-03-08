import { IconType } from "react-icons";
import styled from "styled-components";
import { SiNextdotjs } from "react-icons/si";
import StackSliderItem, { StackSliderItemProps } from "./StackSliderItem";
import { Colors, Devices } from "../../Theme";
import { motion } from "framer-motion";
import { BsChevronLeft, BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { useRef, useState } from "react";

interface StackSliderProps {
  Title: string;
  Items: Array<StackSliderItemProps>;
}
const StackSliderEl = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;
const TitleEl = styled(motion.h3)`
  flex: 1;
  font-size: 7vw;

  background: -webkit-linear-gradient(
    left,
    ${Colors.Gradient.G1[0]},
    ${Colors.Gradient.G1[1]}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${Devices.Tablet} {
    font-size: 5vw;
  }
  @media ${Devices.Laptop} {
    font-size: 3vw;
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

  @media ${Devices.Laptop} {
    gap: 5vw;
  }
`;

const SliderControll = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const LArrow = styled(motion.span)<{
  ind?: string;
}>`
  position: relative;
  width: 5vw;
  cursor: pointer;
  height: 5vw;
  max-height: 2.5rem;
  max-width: 2.5rem;
  font-size: 3.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => (p.ind === "b" ? Colors.Gray : Colors.White)};
  /* color: ${Colors.White}; */
  border-radius: 10px;
  z-index: 2;
  transition: background-color 0.2s ease;

  @media ${Devices.Laptop} {
    font-size: 2vw;
  }
`;

const RArrow = styled(LArrow)`
  background-color: ${(p) => (p.ind === "e" ? Colors.Gray : Colors.White)};
`;

export default function StackSlider(props: StackSliderProps) {
  const { Title, Items } = props;
  const [ScrollInd, setScrollInd] = useState("b");
  const ItemsHolderRef = useRef<HTMLDivElement>(null);

  const Scroll = (dir: "left" | "right", amount: number): void => {
    if (ItemsHolderRef.current) {
      if (dir === "left") {
        ItemsHolderRef.current.scroll({
          left: ItemsHolderRef.current.scrollLeft - amount,
          behavior: "smooth",
        });
      } else {
        ItemsHolderRef.current.scroll({
          left: ItemsHolderRef.current.scrollLeft + amount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <StackSliderEl>
      <TopSection>
        <TitleEl
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, type: "tween" }}
        >
          {Title}
        </TitleEl>
        <SliderControll>
          <LArrow
            ind={ScrollInd}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, type: "tween" }}
            onClick={() => {
              Scroll("left", 200);
            }}
          >
            <BsCaretLeft />
          </LArrow>
          <RArrow
            ind={ScrollInd}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.3, type: "tween" }}
            onClick={() => {
              Scroll("right", 200);
            }}
          >
            <BsCaretRight />
          </RArrow>
        </SliderControll>
      </TopSection>

      <ItemsHolder
        ref={ItemsHolderRef}
        onScroll={(e: any) => {
          const { scrollWidth, scrollLeft, offsetWidth } = e.target;
          const SL = Math.ceil(scrollLeft + offsetWidth);
          if (scrollLeft <= 0) setScrollInd("b");
          if (scrollLeft > 0 && scrollLeft < scrollWidth) setScrollInd("m");
          if (SL >= scrollWidth) setScrollInd("e");
        }}
      >
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
