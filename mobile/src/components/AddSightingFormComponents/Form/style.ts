import styled from "styled-components/native";
import { theme } from "../../../theme";

export const Container = styled.View`
  width: 100%;
  margin-top: 44px;
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;
`;

export const CheckboxText = styled.Text`
  font-family: ${theme.font_family.lato_regular}
  color: #49454F;

  text-align: center;
  line-height: 13px
`;

export const CheckboxContainer = styled.View`
  align-items: center;
  flex-direction: column;

  width: 25%;
  height: 56px;
`;

export const FirstRowContainer = styled.View`
  flex-direction: row;
`;
