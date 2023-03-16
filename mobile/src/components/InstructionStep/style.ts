import { theme } from "../../theme";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const WINDOW_WIDTH = Dimensions.get("window").width;

export const StepContainer = styled.View`
  width: ${WINDOW_WIDTH - 110}px;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;
`;

export const InstructionText = styled.Text`
  font-family: ${theme.font_family.lato_regular};
  font-size: 18px;
  flex: 1;
`;

export const StepsIcon = styled.Image`
  height: 64px;
  width: 64px;

  margin-right: 5px;

  border-radius: 25px;
  flex-shrink: 0;
`;
