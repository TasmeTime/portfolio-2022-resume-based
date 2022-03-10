import { WEList } from "../../Data";
import { Colors } from "../../Theme";
import StyledList from "../common/StyledList";

export default function WorkExperience() {
  return (
    <StyledList
      Title="Work Experience"
      Watermark="Work Experience"
      WMProps={{
        right: "-30%",
        bottom: "0",
        color: Colors.WaterMarkColorDark,
      }}
      Items={WEList}
      IndPos="right"
    />
  );
}
