import { theme } from "../../theme";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;

export const Content = styled.View`
  margin-bottom: 20px;
  height: ${WINDOW_HEIGHT - 500}px;
  width: ${WINDOW_WIDTH - 100}px;

  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${theme.font_family.lato_title};
  font-size: 20px;

  margin-bottom: 15px;
`;

export const ModalScroll = styled.ScrollView``;
