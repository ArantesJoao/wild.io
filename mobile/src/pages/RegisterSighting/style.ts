import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 24px;

  justify-content: space-between;
`;

export const Scroll = styled(ScrollView)`
  background-color: ${theme.colors.background};
`;
