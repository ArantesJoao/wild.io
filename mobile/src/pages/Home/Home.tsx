import React from "react";
import { SafeAreaView } from "react-native";
import { Container, Title, Map, Content, ButtonSection } from "./style";

import map from "../../assets/sample_map.png";
import parksIcon from "../../assets/parks.png";
import wildLifeIcon from "../../assets/wildlife.png";
import { MainMenuButton } from "../../components/MainMenuButton";

export function Home() {
  return (
    <SafeAreaView>
      <Container>
        <Title>Olá, boa tarde!</Title>
        <Content>
          <Map source={map} />
          <ButtonSection>
            <MainMenuButton name="Registrar avistamento" icon={wildLifeIcon} />
            <MainMenuButton
              name="Visualizar parques mais próximos"
              icon={parksIcon}
            />
          </ButtonSection>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
