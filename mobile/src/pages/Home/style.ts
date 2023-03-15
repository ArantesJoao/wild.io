import styled from "styled-components/native";
import MapView from "react-native-maps";

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

export const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;

  margin-top: 6px;
`;

export const ButtonSection = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 29px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${theme.font_family.regular};
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 20%;

  border-radius: 20px;
`;
