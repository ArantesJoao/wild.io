import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  height: 100%;
  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  height: 100%;
  background-color: ${theme.colors.background};
`;

export const Map = styled(MapView)`
  width: auto;
  height: 85%;

  border-radius: 30px;
`;

export const PinPoint = styled(Marker)``;
