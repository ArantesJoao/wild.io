import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";

import { MainMenuButton } from "../../components/MainMenuButton";
import {
  Container,
  Title,
  Map,
  Content,
  ButtonSection,
  SafeView,
} from "./style";

import map from "../../assets/sample_map.png";
import parksIcon from "../../assets/parks.png";
import wildLifeIcon from "../../assets/wildlife.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function Home() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeView>
      <Container>
        <Title>Olá, boa tarde!</Title>
        <Content>
          <Map source={map} />
          <ButtonSection>
            <MainMenuButton
              name="Registrar avistamento"
              icon={wildLifeIcon}
              onPress={() => navigate("sightings")}
            />
            <MainMenuButton
              name="Visualizar parques mais próximos"
              icon={parksIcon}
              onPress={() => navigate("nearest_parks")}
            />
          </ButtonSection>
        </Content>
      </Container>
    </SafeView>
  );
}
