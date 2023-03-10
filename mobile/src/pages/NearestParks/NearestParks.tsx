import React from "react";
import { Container, Content, Map } from "./style";
import { BackButton } from "../../components/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import map from "../../assets/map.png";
import { NearestParksButton } from "../../components/NearestParksButton";

export function NearestParks() {
  const insets = useSafeAreaInsets();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Container>
      <Content>
        <NearestParksButton style={{ paddingTop: insets.top }} />
        <Map source={map} />
      </Content>
      <BackButton onPress={() => navigate("home")} />
    </Container>
  );
}
