import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Button, Icon } from "./style";

import icon from "../../assets/add_park.png";

export interface Props extends TouchableOpacityProps {}

export function AddPark({ ...rest }: Props) {
  return (
    <Button {...rest}>
      <Icon source={icon} />
    </Button>
  );
}
