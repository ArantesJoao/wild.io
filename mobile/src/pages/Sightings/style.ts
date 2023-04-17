import { theme } from "../../theme";
import styled from "styled-components/native";
import MapView, { Marker } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  height: 100%;
  background-color: ${theme.colors.background};
`;

export const Map = styled(MapView)`
  width: auto;
  height: 85%;

  border-radius: 30px;
`;

export const PinPoint = styled(Marker)``;

export const PinPointIcon = styled.Image`
  width: 48px;
  height: 59.94px; // keep icon proportion
`;

export const CalloutContainer = styled.View``;

export const CalloutView = styled.View`
  height: 316px; // current maximum height possible due to bug in react-native-maps. see https://github.com/react-native-maps/react-native-maps/issues/4638
  width: 300px;

  align-items: center;

  background-color: ${theme.colors.background};
  border-radius: 5px;
`;

export const CalloutTitle = styled.Text`
  font-family: ${theme.font_family.lato_title};
  color: ${theme.colors.text};
`;

export const CalloutDescription = styled.Text`
  font-family: ${theme.font_family.lato_regular};
  color: ${theme.colors.text};

  padding: 10px;
`;

export const NoPhotoContainer = styled.View`
  height: 150px;
  width: 80%;
  margin-top: 20px;
  margin-bottom: 10px;

  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.background_photo_button};
  border-radius: 5px;
`;

export const NoPhotoIcon = styled(MaterialIcons)`
  color: #454743;
`;

export const ReportIcon = styled(MaterialIcons)`
  color: #c43535;

  position: absolute;

  bottom: 6px;
  right: 6px;
`;
