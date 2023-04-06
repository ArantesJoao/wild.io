import React from "react";
import { TextInputProps } from "react-native";
import { Container, InputText } from "./style";

export type InputProps = TextInputProps & {
  value?: string;
  isActive: boolean;
};

export function Input({ value, isActive, ...rest }: InputProps) {
  return (
    <Container>
      <InputText isActive={isActive} value={value} {...rest} />
    </Container>
  );
}
