import styled from "styled-components/native";
import { theme } from "../../theme";

export const Button = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  z-index: 1;

  box-shadow: 2px 3px rgba(0, 0, 0, 0.25);
`;

export const Background = styled.View`
  height: 70px;
  width: 365px;
  padding: 10px;
  background-color: ${theme.colors.background};

  justify-content: space-between;
  flex-direction: row;

  border-radius: 10px;
`;

export const Icon = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 10px;

  margin-right: 10px;
`;

export const TextContainer = styled.View`
  width: 320px;
`;

export const Title = styled.Text`
  font-family: ${theme.font_family.title};
`;

export const Subtitle = styled.Text`
  font-family: ${theme.font_family.subtitle};
`;
