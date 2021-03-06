export const Colors = {
  Primary: "#4280FF",
  PrimaryBg: "#F3F7FF ",
  PrimaryDark: "#3C6DD4",
  PrimaryBorder: "#6E9EFF",
  PrimaryFade: "rgba(255,255,255,.1)",
  White: "#FFFFFF",
  Black: "#232323",
  Red: "#FF0000",
  Gray: "#707070",
  GrayFade: "#F8F8F8",
  GrayDes: "#D4DFF4",
  RedHighlight: "#FF6767",
  StackSliderItemBorder: "rgba(112,112,112,.1)",
};

const BreakPoints = {
  MobileS: "320px",
  MobileM: "375px",
  MobileL: "425px",
  Tablet: "768px",
  Laptop: "1024px",
  LaptopL: "1440px",
  Desktop: "2560px",
};

export const Devices = {
  MobileS: `(min-width: ${BreakPoints.MobileS})`,
  MobileM: `(min-width: ${BreakPoints.MobileM})`,
  MobileL: `(min-width: ${BreakPoints.MobileL})`,
  Tablet: `(min-width: ${BreakPoints.Tablet})`,
  Laptop: `(min-width: ${BreakPoints.Laptop})`,
  LaptopL: `(min-width: ${BreakPoints.LaptopL})`,
  Desktop: `(min-width: ${BreakPoints.Desktop})`,
};
