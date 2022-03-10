import { motion } from "framer-motion";
import styled from "styled-components";
import { fadeInFromBottom, strechY } from "../../Animations";
import { Colors, Devices } from "../../Theme";
import { AiOutlineLink } from "react-icons/ai";
export interface ProjectItemProps {
  Id: number;
  Title: string;
  Des: string;
  Link?: string;
}

const ProjectItemEl = styled.article`
  display: inline-flex;
  z-index: 1;
  gap: 2vw;
  color: ${Colors.White};
`;
const Ind = styled(motion.span)`
  @media ${Devices.Laptop} {
    width: 5vw;
  }
  width: 0.2rem;
  max-width: 0.7rem;

  background-color: ${Colors.White};
  border-radius: 30px;
`;
const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const TitleHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

const LinkEl = styled(motion.a)`
  display: flex;
  align-items: center;
  @media ${Devices.Tablet} {
    font-size: 2.5vw;
  }
  @media ${Devices.Laptop} {
    font-size: 2vw;
  }
  text-decoration: none;
  font-size: 3vw;

  :hover {
    transition: outline 0.2s ease;
    outline: 2px solid ${Colors.White};
    border-radius: 5px;
  }
`;
const DesEl = styled(motion.p)`
  @media ${Devices.Tablet} {
    font-size: 2.2vw;
  }
  @media ${Devices.Laptop} {
    font-size: 1.7vw;
  }
  color: ${Colors.GrayDes};
  font-size: 3vw;
`;
const TitleEl = styled(motion.h5)`
  @media ${Devices.Tablet} {
    font-size: 3vw;
  }
  @media ${Devices.Laptop} {
    font-size: 2.5vw;
  }
  font-size: 3.7vw;
`;

export default function ProjectItem(props: ProjectItemProps) {
  const { Id, Title, Des, Link } = props;

  return (
    <ProjectItemEl>
      <Ind {...strechY({ transition: { duration: 1, type: "tween" } })} />
      <InfoHolder>
        {Link ? (
          <TitleHolder>
            <TitleEl
              {...fadeInFromBottom({
                transition: { duration: 0.25, delay: 0.25 },
              })}
            >
              {Title}
            </TitleEl>
            <LinkEl
              target="_blank"
              href={Link}
              {...fadeInFromBottom({
                transition: { delay: 0.25 },
              })}
            >
              <AiOutlineLink />
              {/* {Link} */}
            </LinkEl>
          </TitleHolder>
        ) : (
          <TitleEl>{Title}</TitleEl>
        )}
        <DesEl
          {...fadeInFromBottom({
            transition: { duration: 0.25 },
          })}
        >
          {Des}
        </DesEl>
      </InfoHolder>
    </ProjectItemEl>
  );
}
