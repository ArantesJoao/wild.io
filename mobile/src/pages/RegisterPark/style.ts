import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};

  padding-top: 10px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 24px;

  justify-content: center;
`;
