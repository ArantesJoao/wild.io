import React from "react";
import { TouchableOpacityProps } from "react-native";
import { BackIcon, BackIconText, Icon } from "./style";

import icon from "../../assets/icon.png";

export interface Props extends TouchableOpacityProps {}

export function BackButton({ ...rest }: Props) {
  return (
    <BackIcon {...rest}>
      <Icon source={icon} />
      <BackIconText>Voltar</BackIconText>
    </BackIcon>
  );
}
