import { theme } from "../../theme";
import MapView from "react-native-maps";
import styled from "styled-components/native";

export const MapContainer = styled.View`
  height: 100%;
  background-color: ${theme.colors.background};
`;

export const Map = styled(MapView)`
  height: 85%;
  border-radius: 30px;
`;

export const MarkerIcon = styled.Image`
  width: 48px;
  height: 59.94px; // keep icon proportion
`;
