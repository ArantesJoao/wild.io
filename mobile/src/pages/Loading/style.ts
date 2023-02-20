import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  margin-bottom: 300px;
  margin-top: 7px;

  font-family: ${theme.font_family.title};
  font-size: 48px;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.Image`
  width: 75px;
  height: 75px;
`;
