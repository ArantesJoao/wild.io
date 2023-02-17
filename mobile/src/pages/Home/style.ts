import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  display: flex;
  align-content: center;
  flex-direction: column;

  padding: 10px 15px;

  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;

  margin-top: 6px;
`;

export const Title = styled.Text`
  font-size: ${theme.font_size.lg}px;
  font-family: ${theme.font_family.regular};
`;

export const Map = styled.Image`
  width: 345px;
  height: 165px;
`;

export const Button = styled.TouchableOpacity`
  width: 165px;
  height: 165px;

  border-radius: 30;

  background-color: ${theme.colors.surface_button};
`;

export const ButtonTitle = styled.Text`
  color: ${theme.colors.text_button};
  font-family: ${theme.font_family.regular};
  font-size: ${theme.font_size.md}px;

  padding: 0px 16.5px;
`;

export const ButtonIcon = styled.Image`
  height: 48px;
  width: 48px;

  margin: 11px 0px 0px 8px;
`;
