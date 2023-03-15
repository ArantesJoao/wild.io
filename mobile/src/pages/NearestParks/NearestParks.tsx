import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { BackButton } from "../../components/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Container, Content, Map, PinPoint } from "./style";
import { NearestParksButton } from "../../components/NearestParksButton";
import { customMap } from "../../utils/mapStyle";

let parks = [
  {
    title: "Jardim Botânico de Flroianópolis",
    location: {
      latitude: -27.578936344230346,
      longitude: -48.5085277240508,
    },
    description:
      "O Parque Jardim Botânico de Florianópolis é um parque público localizado no bairro Itacorubi, em Florianópolis, em terreno contíguo ao Manguezal do Itacorubi. A área está em processo para se tornar o Jardim Botânico da cidade.",
  },
  {
    title: "Parque Municipal do Córrego Grande",
    location: {
      latitude: -27.599262638742097,
      longitude: -48.51161143317963,
    },
    description:
      "O Parque Ecológico do Córrego Grande é uma unidade de conservação localizada no município brasileiro de Florianópolis.",
  },
];

let mapStyle = customMap;

export function NearestParks() {
  const insets = useSafeAreaInsets();
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const showParks = () => {
    return parks.map((park, index) => {
      return (
        <PinPoint
          key={index}
          coordinate={park.location}
          title={park.title}
          description={park.description}
          icon={require("../../assets/park_marker.png")}
        ></PinPoint>
      );
    });
  };

  const [mapRegion, setMapRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
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
    <Container>
      <Content>
        <NearestParksButton style={{ paddingTop: insets.top }} />
        <Map
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          region={mapRegion}
          showsUserLocation={true}
        >
          {showParks()}
        </Map>
      </Content>
      <BackButton onPress={() => navigate("home")} />
    </Container>
  );
}
