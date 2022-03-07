import styled from "styled-components";
import { Colors } from "../../Colors";
export interface WaterMarkProps {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  fontSize?: string;
  rotate?: string;
  color?: string;
  fontWeight?: string;
  zIndex?: number;
}
export const WaterMark = styled.div<WaterMarkProps>`
  position: absolute;

  left: ${(p) => (p.left ? p.left : "")};
  top: ${(p) => (p.top ? p.top : "")};
  right: ${(p) => (p.right ? p.right : "")};
  z-index: ${(p) => (p.zIndex ? p.zIndex : "")};
  bottom: ${(p) => (p.bottom ? p.bottom : "")};
  font-size: ${(p) => (p.fontSize ? p.fontSize : "10rem")};
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "bold")};
  transform: rotate(${(p) => (p.rotate ? p.rotate : "0")});
  color: ${(p) => (p.color ? p.color : Colors.PrimaryFade)};
`;
