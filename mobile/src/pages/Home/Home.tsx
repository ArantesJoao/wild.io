import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { ParamListBase, useNavigation } from "@react-navigation/native";

import { MainMenuButton } from "../../components/MainMenuButton";
import {
  Container,
  Title,
  Content,
  ButtonSection,
  SafeView,
  Map,
} from "./style";

import { customMap } from "../../utils/mapStyle";
import parksIcon from "../../assets/parks.png";
import wildLifeIcon from "../../assets/wildlife.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

let mapStyle = customMap;

export function Home() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [mapRegion, setMapRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.9,
    longitudeDelta: 0.04,
  });
  const [errorMsg, setErrorMsg] = useState(String);

  const currentUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("O aplicativo não tem acesso à localização do usuário");
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  };

  useEffect(() => {
    currentUserLocation();
  }, []);

  return (
    <SafeView>
      <Container>
        <Title>Olá, boa tarde!</Title>
        <Content>
          <Map
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            region={mapRegion}
            showsUserLocation={true}
          ></Map>
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
