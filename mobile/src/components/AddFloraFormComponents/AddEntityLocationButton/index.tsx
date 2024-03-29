import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./style";
import locationIcon from "../../../assets/near_me.png";

interface Props extends TouchableOpacityProps {
  title: string;
}

export function AddEntityLocationButton({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon source={locationIcon} />
      <Title>{title}</Title>
    </Container>
  );
}
