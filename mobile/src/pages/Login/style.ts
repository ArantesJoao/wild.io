import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

import { theme } from "../../theme";

export const SafeView = styled.SafeAreaView`
  background-color: ${theme.colors.background};
`;

export const Container = styled.View`
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.background};
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;

  margin-bottom: 26px;
`;

export const Title = styled.Text`
  font-family: ${theme.font_family.lato_title};
  font-size: 28px;

  margin-bottom: 8px;
`;

export const Caption = styled.Text`
  font-family: ${theme.font_family.lato_regular};
  font-size: 16px;

  margin-bottom: 170px;
`;

export const WildIoText = styled.Text`
  font-family: ${theme.font_family.lato_title};
  color: ${theme.colors.logo};
  font-size: 28px;
`;

export const LoginButtonContent = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.TouchableOpacity`
  padding: 5px;

  border: solid ${theme.colors.logo};
  border-radius: 4px;

  margin-bottom: 10px;
`;

export const GoogleIcon = styled(AntDesign)`
  color: ${theme.colors.logo};
  margin-right: 7px;
`;

export const LoginText = styled.Text`
  font-family: ${theme.font_family.lato_regular};
  color: ${theme.colors.logo};
  font-size: 24px;
`;

export const NoLoginText = styled.Text`
  font-family: ${theme.font_family.lato_regular};
  color: ${theme.colors.text};
  font-size: 16px;

  text-decoration: underline;
`;

export const NoLoginTouchable = styled.TouchableOpacity``;
