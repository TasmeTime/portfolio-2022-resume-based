import { EducationList } from "../../Data";
import { Colors } from "../../Theme";
import StyledList from "../common/StyledList";

export default function Education() {
  return (
    <StyledList
      Title="Education"
      Watermark="Education"
      WMProps={{
        right: "-30%",
        bottom: "0",
        color: Colors.WaterMarkColorDark,
      }}
      IndPos="left"
      Items={EducationList}
    />
  );
}
