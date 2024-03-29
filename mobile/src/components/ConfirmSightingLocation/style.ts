import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../theme";

const WINDOW_HEIGHT = Dimensions.get("window").height;

export const Container = styled.TouchableOpacity`
  position: absolute;
  padding: 22px 11px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.logo};
  border-radius: 15px;

  width: 80%;
  margin: 0 10%;
  top: ${WINDOW_HEIGHT - 230}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${theme.font_family.lato_title};

  color: ${theme.colors.white_button_text};
`;
