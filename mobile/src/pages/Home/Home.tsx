import React from "react";
import { SafeAreaView } from "react-native";
import {
  Container,
  Title,
  Map,
  Content,
  Button,
  ButtonTitle,
  ButtonIcon,
} from "./style";

import map from "../../assets/sample_map.png";
import parksIcon from "../../assets/parks.png";
import wildLifeIcon from "../../assets/wildlife.png";

export function Home() {
  return (
    <SafeAreaView>
      <Container>
        <Title>Olá, boa tarde!</Title>
        <Content>
          <Map source={map} />
          <Button>
            <ButtonIcon source={wildLifeIcon} />
            <ButtonTitle>Registrar Avistamento</ButtonTitle>
          </Button>
          <Button>
            <ButtonIcon source={parksIcon} />
            <ButtonTitle>Visualizar parques mais próximos</ButtonTitle>
          </Button>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
