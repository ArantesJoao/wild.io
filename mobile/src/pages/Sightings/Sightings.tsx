import React from "react";
import { Container, Map } from "./style";
import { BackButton } from "../../components/BackButton";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import map from "../../assets/map.png";
import { AddSighting } from "../../components/AddSighting";

export function Sightings() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Container>
      <Map source={map} />
      <AddSighting />
      <BackButton onPress={() => navigate("home")} />
    </Container>
  );
}
