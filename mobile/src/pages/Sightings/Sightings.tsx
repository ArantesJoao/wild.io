import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { Container, Map } from "./style";
import { BackButton } from "../../components/BackButton";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AddSighting } from "../../components/AddSighting";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { customMap } from "../../utils/mapStyle";

let mapStyle = customMap;

export function Sightings() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [sightingModalVisible, setSightingModalVisible] = useState(false);

  const [mapRegion, setMapRegion] = useState({
    latitude: -27.597664753388656,
    longitude: -48.52063085134813,
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
  };

  useEffect(() => {
    currentUserLocation();
  }, []);

  function handleOpenAddSightingModal() {
    setSightingModalVisible(!sightingModalVisible);
  }

  return (
    <Container>
      <Map
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        region={mapRegion}
        showsUserLocation={true}
      ></Map>
      <AddSighting
        onPress={() => navigate("register_sighting")}
        activeOpacity={0.7}
      />
      <BackButton onPress={() => navigate("home")} />
    </Container>
  );
}
