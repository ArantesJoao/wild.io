import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  height: 100%;
  background-color: ${theme.colors.background};
`;

export const Map = styled.Image`
  width: auto;
  height: 85%;
`;

export const BackIcon = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 15%;

  width: 110px;
  margin-left: 15px;
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
`;

export const BackIconText = styled.Text`
  font-family: ${theme.font_family.regular};
  color: ${theme.colors.logo};
  font-size: 20px;
`;
