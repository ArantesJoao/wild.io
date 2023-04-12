import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { Container, Map, PinPoint, PinPointIcon } from "./style";
import { BackButton } from "../../components/BackButton";
import {
  useNavigation,
  ParamListBase,
  useFocusEffect,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AddSighting } from "../../components/AddSighting";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { customMap } from "../../utils/mapStyle";
import useSightings from "../../hooks/useSightings";

let mapStyle = customMap;

export function Sightings() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { sightings, fetchSightings, loading, error } = useSightings();

  useFocusEffect(
    React.useCallback(() => {
      fetchSightings();
    }, [])
  );

  const [sightingModalVisible, setSightingModalVisible] = useState(false);

  const [mapRegion, setMapRegion] = useState({
    latitude: -27.597664753388656,
    longitude: -48.52063085134813,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const showSightings = () => {
    return sightings.map((sighting, index) => {
      return (
        <PinPoint
          key={index}
          coordinate={sighting.location}
          title={sighting.species}
          description={sighting.description}
        >
          <PinPointIcon source={require("../../assets/wildlife_marker.png")} />
        </PinPoint>
      );
    });
  };

  const [errorMsg, setErrorMsg] = useState(String);

  const currentUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("O aplicativo não tem acesso à localização do usuário");
      return;
    }

    let location = await Location.getLastKnownPositionAsync();
    setMapRegion({
      latitude:
        location != null ? location.coords.latitude : -27.597664753388656,
      longitude:
        location != null ? location.coords.longitude : -48.52063085134813,
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
      >
        {showSightings()}
      </Map>
      <AddSighting
        onPress={() => navigate("register_sighting")}
        activeOpacity={0.7}
      />
      <BackButton onPress={() => navigate("home")} />
    </Container>
  );
}
