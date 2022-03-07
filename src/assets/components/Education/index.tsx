import { EducationList } from "../../Data";
import StyledList from "../common/StyledList";

export default function Education() {
  return (
    <StyledList
      Title="Education"
      Watermark="Education"
      WMProps={{
        right: "-30%",
        bottom: "0",
      }}
      IndPos="left"
      Items={EducationList}
    />
  );
}
