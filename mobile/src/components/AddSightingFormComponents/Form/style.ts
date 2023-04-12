import styled from "styled-components/native";
import { LinearProgress } from "react-native-elements";
import { theme } from "../../../theme";

export const Container = styled.View`
  width: 100%;
  margin-top: 44px;
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;
`;

export const CheckboxText = styled.Text`
  font-family: ${theme.font_family.lato_regular};
  color: #49454f;

  text-align: center;
  line-height: 13px;

  margin-top: 7px;
`;

export const CheckboxContainer = styled.View`
  align-items: center;
  flex-direction: column;

  width: 25%;
  height: 56px;
`;

export const FirstRowContainer = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const InputAndInputError = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const SpeciesError = styled.Text`
  margin-bottom: 0px;
`;

export const LoadingBar = styled(LinearProgress)`
  color: ${theme.colors.loading_bar};

  width: 95%;
  align-self: center;

  margin-top: 20px;
`;
