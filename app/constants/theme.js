import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  black: "#1E1F20",
  white: "#FFFFFF",
  gray: "#6A6A6A",
  blue: "#0682FE",
  violet: "#8a2be2"
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  Black: require("../assets/fonts/Montserrat-Black.ttf"),
  BlackIT: require("../assets/fonts/Montserrat-BlackItalic.ttf"),
  Bold: require("../assets/fonts//Montserrat-Bold.ttf"),
  BoldIT: require("../assets/fonts/Montserrat-BoldItalic.ttf"),
  ExtraBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
  ExtraBoldIT: require("../assets/fonts/Montserrat-ExtraBoldItalic.ttf"),
  ExtraLight: require("../assets/fonts/Montserrat-ExtraLight.ttf"),
  ExtraLightIT: require("../assets/fonts/Montserrat-ExtraLightItalic.ttf"),
  Light: require("../assets/fonts/Montserrat-Light.ttf"),
  LightIT: require("../assets/fonts/Montserrat-LightItalic.ttf"),
  Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
  MediumIT: require("../assets/fonts/Montserrat-MediumItalic.ttf"),
  Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
  SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
