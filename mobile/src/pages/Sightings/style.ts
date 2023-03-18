import { theme } from "../../theme";
import MapView from "react-native-maps";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  background-color: ${theme.colors.background};
`;

export const Map = styled(MapView)`
  width: auto;
  height: 85%;

  border-radius: 30px;
`;
