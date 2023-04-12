import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { BackButton } from "../../components/BackButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useNavigation,
  ParamListBase,
  useFocusEffect,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { customMap } from "../../utils/mapStyle";
import { Container, Content, Map, PinPoint, PinPointIcon } from "./style";
import { AddPark } from "../../components/AddPark";
import useParks from "../../hooks/useParks";

let mapStyle = customMap;

export function NearestParks() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { parks, fetchParks, loading, error } = useParks();

  useFocusEffect(
    React.useCallback(() => {
      fetchParks();
    }, [])
  );

  const showParks = () => {
    return parks.map((park, index) => {
      return (
        <PinPoint
          key={index}
          coordinate={park.location}
          title={park.name}
          description={park.description}
        >
          <PinPointIcon source={require("../../assets/park_marker.png")} />
        </PinPoint>
      );
    });
  };

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

  return (
    <Container>
      <Content>
        <Map
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          region={mapRegion}
          showsUserLocation={true}
        >
          {showParks()}
        </Map>
        <AddPark onPress={() => navigate("register_park")} />
        <BackButton onPress={() => navigate("home")} />
      </Content>
    </Container>
  );
}
