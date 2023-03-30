import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.TouchableOpacity`
  padding: 22px 11px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.logo};
  border-radius: 15px;

  width: 80%;
  margin: 0 10%;
  bottom: 170px
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${theme.font_family.lato_title};

  color: ${theme.colors.white_button_text};
`;
