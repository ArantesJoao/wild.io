import styled from "styled-components/native";
import { theme } from "../../theme";

export const ModalContainer = styled.View`
  flex: 1;
  background-color: "rgba(0, 0, 0, 0.5)";
  justify-content: center;
  align-items: center;
`;

export const ModalBackground = styled.View`
  background-color: ${theme.colors.background};
  border-radius: 8px;
  padding: 16px;

  align-items: center;
`;

export const ContentWrapper = styled.View`
  align-items: center;
`;

export const OkButton = styled.TouchableOpacity`
  background-color: ${theme.colors.logo};

  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 5px;

  border-radius: 5px;
`;

export const OkText = styled.Text`
  font-family: ${theme.font_family.lato_regular};
  font-size: 16px;
  color: ${theme.colors.white_button_text};

  padding: 2px 75px;
`;
