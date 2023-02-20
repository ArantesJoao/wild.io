import React from "react";
import { BackIcon, BackIconText, Container, Icon, Map } from "./style";

import map from "../../assets/map.png";
import icon from "../../assets/icon.png";
import { SafeAreaView, View } from "react-native";

export function Sightings() {
  return (
    // TODO: Make top SafeAreaView transparent
    <SafeAreaView>
      <Container>
        <Map source={map} />
        <BackIcon>
          <Icon source={icon} />
          <BackIconText>Voltar</BackIconText>
        </BackIcon>
      </Container>
    </SafeAreaView>
  );
}
