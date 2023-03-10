import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Button,
  Icon,
  Subtitle,
  TextContainer,
  Title,
  Background,
} from "./style";

import icon from "../../assets/nearest_parks.png";

export interface Props extends TouchableOpacityProps {}

export function NearestParksButton({ ...rest }: Props) {
  return (
    <Button {...rest}>
      <Background>
        <Icon source={icon} />
        <TextContainer>
          <Title>Parques mais próximos</Title>
          <Subtitle>
            Veja aqui os parques mais próximos de sua atual localização
          </Subtitle>
        </TextContainer>
      </Background>
    </Button>
  );
}
