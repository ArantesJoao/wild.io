import styled from "styled-components/native";
import { theme } from "../../../theme";

export const Container = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.background_photo_button};

  width: 100%;
  height: 170px;
  margin-bottom: 30px;

  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

export const AddImageText = styled.Text`
  font-size: 20px;
  font-family: ${theme.font_family.lato_regular};
  color: ${theme.colors.photo_button_text};
`;

export const Icon = styled.Image`
  width: 59.07px;
  height: 53.8px; // keep proportions
`;

export const SelectedImage = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 30px;
`;
