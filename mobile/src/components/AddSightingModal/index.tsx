import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Button, ButtonIcon, ButtonTitle } from "./style";

export interface Props extends TouchableOpacityProps {
  name: string;
  icon: string;
}

export function MainMenuButton({ name, icon, ...rest }: Props) {
  return (
    <Button {...rest}>
      <ButtonIcon source={icon} />
      <ButtonTitle>{name}</ButtonTitle>
    </Button>
  );
}
