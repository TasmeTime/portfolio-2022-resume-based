import { motion } from "framer-motion";
import styled from "styled-components";
import { Colors, Devices } from "../../../Theme";

export interface StyledListItemProps {
  Id: number;
  Title: string;
  SubTitle?: string;
  Des?: string;
  From?: Date;
  To?: Date;
  TillPresent?: boolean;
}

const StyledListItemEl = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Ind = styled(motion.span)`
  width: 0.5rem;
  min-width: 0.5rem;
  height: 0.5rem;
  min-height: 0.5rem;
  border-radius: 50%;
  background-color: ${Colors.Gray};
`;

const TitleHolder = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${Colors.White};
`;

const TitleEl = styled(motion.h5)`
  font-size: 1.1rem;

  font-weight: 600;
  flex: 1;
  font-size: 3.5vw;

  @media ${Devices.Tablet} {
    font-size: 3vw;
  }
`;
const DateHolder = styled(motion.span)`
  display: flex;
  gap: 0.25rem;

  font-weight: 500;
  font-size: 3vw;

  @media ${Devices.Tablet} {
    font-size: 2.5vw;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  color: ${Colors.Gray};
  font-weight: 500;
`;
const SubTitleEl = styled(motion.h6)`
  font-size: 2.7vw;

  @media ${Devices.Tablet} {
    font-size: 2.2vw;
  }
  font-weight: 500;
`;
const DesEl = styled(motion.p)`
  @media ${Devices.Tablet} {
    font-size: 2.2vw;
  }
  font-weight: 500;
`;

const Animations = {
  ind: {
    init: {
      width: 0,
    },
    onVis: {
      width: "2rem",
    },
  },
  fadeInFromBottom: {
    init: {
      y: 50,
      opacity: 0,
    },
    onVis: {
      y: 0,
      opacity: 1,
    },
  },
};

export default function StyledListItem(props: StyledListItemProps) {
  const { Id, Title, SubTitle, Des, From, To, TillPresent } = props;
  return (
    <StyledListItemEl>
      <TitleHolder>
        <Ind
          variants={Animations.fadeInFromBottom}
          initial="init"
          whileInView="onVis"
        />
        <TitleEl
          variants={Animations.fadeInFromBottom}
          initial="init"
          transition={{ delay: 0.25 }}
          whileInView="onVis"
        >
          {Title}
        </TitleEl>
        <DateHolder
          variants={Animations.fadeInFromBottom}
          initial="init"
          transition={{ delay: 0.35 }}
          whileInView="onVis"
        >
          {From ? <span>{From?.getFullYear()}</span> : ""}-
          {TillPresent ? (
            <span>Presents</span>
          ) : (
            <span>{To?.getFullYear()}</span>
          )}
        </DateHolder>
      </TitleHolder>
      <Info>
        <SubTitleEl
          variants={Animations.fadeInFromBottom}
          initial="init"
          transition={{ delay: 0.35 }}
          whileInView="onVis"
        >
          {SubTitle}
        </SubTitleEl>
        {Des ? (
          <DesEl
            variants={Animations.fadeInFromBottom}
            initial="init"
            transition={{ delay: 0.35 }}
            whileInView="onVis"
          >
            {Des}
          </DesEl>
        ) : (
          ""
        )}
      </Info>
    </StyledListItemEl>
  );
}
