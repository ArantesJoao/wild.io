import { theme } from "../../theme";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const WINDOW_WIDTH = Dimensions.get("window").width;

export const Content = styled.View`
  margin-bottom: 20px;
  height: fit-content;
  width: ${WINDOW_WIDTH - 100}px;

  align-items: center;
`;

export const WarningText = styled.Text`
  font-family: ${theme.font_family.lato_regular};
  font-size: 20px;

  text-align: center;

  margin: 15px 0;
`;
