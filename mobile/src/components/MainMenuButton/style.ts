import styled from "styled-components/native";
import { theme } from "../../theme";

export const Button = styled.TouchableOpacity`
  width: 47%;
  height: 60%;

  border-radius: 30px;
  margin-bottom: 30px;

  background-color: ${theme.colors.surface_button};
`;

export const ButtonTitle = styled.Text`
  color: ${theme.colors.text_button};
  font-family: ${theme.font_family.regular};
  font-size: 18px;

  padding: 0px 16.5px;
`;

export const ButtonIcon = styled.Image`
  height: 48px;
  width: 48px;

  margin: 11px 0px 0px 8px;
`;
