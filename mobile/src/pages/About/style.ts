import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

import { theme } from "../../theme";

export const SafeView = styled.SafeAreaView`
  background-color: ${theme.colors.background};
`;

export const Container = styled.View`
  height: 100%;
  width: 100%;

  align-items: center;

  background-color: ${theme.colors.background};
`;

export const WarningContainer = styled.View`
  background-color: ${theme.colors.background_photo_button};
  margin: 5% 5% 20% 5%;
  padding: 8%;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
`;

export const WarningText = styled.Text`
  text-align: center;
  font-family: ${theme.font_family.lato_regular};
  font-size: 18em;
  color = ${theme.colors.text};
`;

export const BoldWarningText = styled.Text`
  font-family: ${theme.font_family.lato_title};
  font-size: 18em;
  color = ${theme.colors.text};
`;

export const WarningIcon = styled(MaterialIcons)`
  color: ${theme.colors.warning_text};
  font-size: 48px;
  margin-right: 7px;

  margin-bottom: 5%;
`;

export const Title = styled.Text`
  font-family: ${theme.font_family.lato_title};
  font-size: 20em;
  color = ${theme.colors.text};
`;

export const InformationalText = styled.Text`
  font-family: ${theme.font_family.lato_regular};
  font-size: 18em;
  color = ${theme.colors.text};
  padding: 3% 6%;
  text-align: justify;

  margin-bottom: 22%
`;
