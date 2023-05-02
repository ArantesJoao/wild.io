import MapView from "react-native-maps";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import IconFontAwesome from "@expo/vector-icons/FontAwesome";

import { theme } from "../../theme";

export const SafeView = styled.SafeAreaView`
  background-color: ${theme.colors.background};
`;

export const Container = styled.View`
  display: flex;
  align-content: center;
  flex-direction: column;

  padding: 10px 15px;

  background-color: ${theme.colors.background};
`;

export const ScreenHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  background-color: ${theme.colors.background};
`;

export const LogoutIcon = styled(MaterialIcons)`
  color: ${theme.colors.warning_text};
`;

export const LogoutButton = styled.TouchableOpacity`
  color: ${theme.colors.warning_text};
`;

export const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;

  margin-top: 6px;
`;

export const ButtonSection = styled.View`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 29px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${theme.font_family.regular};
`;

export const NoLocationContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;

  background-color: ${theme.colors.warning_background};

  padding: 10px;
  margin-top: -45px;

  border-radius: 5px;
`;

export const NoLocationText = styled.Text`
  font-family: ${theme.font_family.regular};
  color: ${theme.colors.warning_text};
`;

export const NoLocationAccessWarning = styled(IconFontAwesome)`
  color: ${theme.colors.warning_text};
  font-size: 16px;
  margin-right: 7px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 20%;

  border-radius: 20px;
`;
