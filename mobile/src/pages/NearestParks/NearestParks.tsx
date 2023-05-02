import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { BackButton } from "../../components/BackButton";
import InformLocationModal from "../../components/InformLocationModal";
import { InformLocationContent } from "../../components/InformLocationContent";
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
import { useGlobalContext } from "../../../globalContext";

let mapStyle = customMap;

export function NearestParks() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { parks, fetchParks } = useParks();
  const { isUserLogged } = useGlobalContext();

  // Modal handling
  const [necessaryLoginModalInfo, setNecessaryLoginModalInfo] = useState(false);

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

  function handleAddPark() {
    if (isUserLogged) {
      navigate("register_park");
    } else {
      setNecessaryLoginModalInfo(true);
    }
  }

  return (
    <Container>
      <InformLocationModal
        visible={necessaryLoginModalInfo}
        onClose={() => {
          setNecessaryLoginModalInfo(false);
        }}
      >
        <InformLocationContent info="Essa função é exclusiva para usuários logados!" />
      </InformLocationModal>
      <Content>
        <Map
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          region={mapRegion}
          showsUserLocation={true}
        >
          {showParks()}
        </Map>
        <AddPark onPress={handleAddPark} />
        <BackButton onPress={() => navigate("home")} />
      </Content>
    </Container>
  );
}
