import styled from "styled-components/native";
import { theme } from "../../../theme";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 22px 11px;
  align-items: center;
  background-color: ${theme.colors.logo};
  border-radius: 15px;
  margin: 45px 0;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${theme.font_family.lato_title};

  color: ${theme.colors.white_button_text};

  width: 85%;
  text-align: center;
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;

  margin-right: 10px;
`;
