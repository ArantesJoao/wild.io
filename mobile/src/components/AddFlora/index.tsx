import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Button, Icon } from "./style";

import icon from "../../assets/add_flora.png";

export interface Props extends TouchableOpacityProps {}

export function AddFlora({ ...rest }: Props) {
  return (
    <Button {...rest}>
      <Icon source={icon} />
    </Button>
  );
}
