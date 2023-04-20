import { TextInput } from "react-native";
import styled from "styled-components/native";

interface Props {
  isActive: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  height: 56px;
  margin-bottom: 8px;
  width: 75%;
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  border: 1px #79747e;
  border: ${({ isActive }: Props) =>
    isActive ? "1px #79747e" : "1px #e4e5e0"};
  border-radius: 7px;
  padding: 0 23px;
`;
